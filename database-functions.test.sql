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

-- Test movie_range_of_movie_dates
BEGIN;
    drop trigger prevent_deleting_older_movies on movie;
    delete from movie
    where id not in (
        select id
        from movie
        where watched_on = '01 Jun 2016'
        or watched_on = '16 Jun 2016'
        or watched_on = '21 Jul 2016'
        or watched_on = '23 Jul 2016'
        or watched_on = '05 Aug 2016'
        or watched_on = '09 Aug 2016'
    );

    DO $$
        declare got text;
        declare expected text;
        declare header_message text;
        declare failure_message text;
        declare success_message text;
    BEGIN
        select movie_range_of_movie_dates(
            (select movie from movie limit 1),
            3 -- 3 movies
        ) into got;

        -- expecting a range of 4 movies from "21 Jul 2016" because
        -- there aren't enough movies for another range of 3 from "05
        -- Aug 2016"
        select '{01 Jun 2016, 21 Jul 2016, 09 Aug 2016}'::text[] into expected;

        select
        E'\nTEST movie_range_of_movie_dates '
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

-- Test movie_genres_or_ratings_and_their_counts_in_the_range
-- (genres)
BEGIN;
    drop trigger prevent_deleting_older_movies on movie;
    -- delete all movies besides 2 action movies and 1 horror using
    -- movies whose titles make their genres obvious
    delete from movie
    where id not in (
        select id
        from movie
        where title = 'Mad Max: Fury Road'
        or title = 'Die Hard'
        or title = 'The Thing'
    );

    DO $$
        declare function_output json;
        declare got text;
        declare expected text;
        declare header_message text;
        declare failure_message text;
        declare success_message text;
    BEGIN
        select movie_genres_or_ratings_and_their_counts_in_the_range(
            (select movie from movie limit 1),
            ARRAY['01 Jun 2016', '31 Dec 2099'],
            'genre',
            2 -- 2 genre, count tuples
        ) into function_output;

        select function_output::text into got;
        select '[["Action","2"],["Horror","1"]]' into expected;

        select
        E'\nTEST movie_genres_or_ratings_and_their_counts_in_the_range '
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

-- Test movie_imdb_ratings_score_compared_to_mine
BEGIN;
    drop trigger prevent_deleting_older_movies on movie;
    -- delete all movies besides 1 which I've rated using a rating which
    -- has a higher score than that of its translated IMDb rating
    delete from movie
    where id not in (
        select id
        from movie
        where my_rating = 'Great Onion' -- score of 4
        and imdb_rating < 6.0 -- translated to "Good Tomato" (at best), so score <= 3
        limit 1
    );

    DO $$
        declare got text;
        declare expected text;
        declare header_message text;
        declare failure_message text;
        declare success_message text;
    BEGIN
        select movie_imdb_ratings_score_compared_to_mine(
            (select movie from movie limit 1),
            ARRAY['01 Jun 2016', '31 Dec 2099']
        ) into got;

        select 'lower' into expected;

        select
        E'\nTEST movie_imdb_ratings_score_compared_to_mine '
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

-- Test movie_names_and_counts_of_principals_in_the_range
-- (directors)
BEGIN;
    drop trigger prevent_deleting_older_movies on movie;
    -- delete all movies besides 5 whose titles make their directors obvious
    delete from movie
    where id not in (
        select id
        from movie
        where title = 'Mulholland Dr.'
        or title = 'The Lord of the Rings: The Fellowship of the Ring'
        or title = 'The Lord of the Rings: The Two Towers'
        or title = 'The Lord of the Rings: The Return of the King'
        or title = 'The Dark Knight'
    );

    DO $$
        declare function_output json;
        declare got text;
        declare expected text;
        declare header_message text;
        declare failure_message text;
        declare success_message text;
    BEGIN
        select movie_names_and_counts_of_principals_in_the_range(
            (select movie from movie limit 1),
            ARRAY['01 Jun 2016', '31 Dec 2099'],
            'directors',
            5 -- 5 name, count tuples
        ) into function_output;

        select function_output::text into got;
        select '[["Peter Jackson","3"],["Christopher Nolan","1"],["David Lynch","1"]]' into expected;

        select
        E'\nTEST movie_names_and_counts_of_principals_in_the_range '
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
