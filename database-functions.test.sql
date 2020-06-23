-- stop if a test fails and return a non-zero exit code
\set ON_ERROR_STOP true

-- Test movie_number_of_movies_per_decade_in_the_range
BEGIN;
    drop trigger prevent_deleting_older_movies on movie;
    -- delete all movies besides 5 released in the 80s,
    -- and 1 from the 90s
    delete from movie
    where id not in (
        select id
        from movie
        where year_of_release >= 1980
        and year_of_release <= 1990
        order by id desc
        limit 6
    );

    DO $$
        declare function_output json;
        declare got text;
        declare expected text;
        declare header_message text;
        declare failure_message text;
        declare success_message text;
    BEGIN
        select movie_number_of_movies_per_decade_in_the_range(
            (select movie from movie limit 1),
            ARRAY['01 Jun 2016', '31 Dec 2099'],
            2
        ) into function_output;

        select function_output::text into got;
        select '[["1980s","5"],["1990s","1"]]' into expected;

        select
        E'\nTEST movie_number_of_movies_per_decade_in_the_range '
        into header_message;

        select
        header_message
        || 'FAIL'
        || E'\n\tGot: "'
        || got
        || E'"\n\tExpected: "'
        || expected
        || '"' into failure_message;

        assert got = expected, failure_message;

        select
        header_message
        || 'PASS'
        into success_message;

        raise info '%', success_message;
    END $$ LANGUAGE 'plpgsql';
ROLLBACK;
