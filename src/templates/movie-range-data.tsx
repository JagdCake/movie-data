import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TimeSpent from '../components/time-spent';
import MovieRangeSelector from '../components/movie-range-selector';
import MovieLength from '../components/movie-length';
import { MovieLengthProps } from '../components/movie-length';
import List from '../components/list';
import Footer from '../components/footer';

export const query = graphql`
    query($movieDateRange: [String]!) {
        postgres {
            timeSpent: movieById(id: 1) {
                numberOfMovies: numberOfMoviesInTheRange(
                    movieDateRange: $movieDateRange
                )
                daysSinceFirstMovie: daysSinceFirstMovieInTheRange(
                    movieDateRange: $movieDateRange
                )
                daysSpentWatching: daysSpentWatchingMoviesInTheRange(
                    movieDateRange: $movieDateRange
                )
                percentOfTimeSpentWatching: percentOfTimeSpentWatchingMoviesInTheRange(
                    movieDateRange: $movieDateRange
                )
                hoursSpentWatching: hoursSpentWatchingMoviesInTheRange(
                    movieDateRange: $movieDateRange
                )
                remainingMinutesSpentWatching: remainingMinutesSpentWatchingMoviesInTheRange(
                    movieDateRange: $movieDateRange
                )
            }
            movieLength: movieById(id: 1) {
                longestMovie: runtimeAndTitleOfMovieOfSpecificLengthInTheRang(
                    movieDateRange: $movieDateRange
                    movieLength: "longest"
                )
                shortestMovie: runtimeAndTitleOfMovieOfSpecificLengthInTheRang(
                    movieDateRange: $movieDateRange
                    movieLength: "shortest"
                )
                movieOfAverageLength: runtimeAndTitleOfMovieOfSpecificLengthInTheRang(
                    movieDateRange: $movieDateRange
                    movieLength: "average"
                )
            }
            lists: movieById(id: 1) {
                top10Genres: genresOrRatingsAndTheirCountsInTheRange(
                    movieDateRange: $movieDateRange
                    genreOrRating: "genre"
                    numberOfValues: 10
                )
                top10Directors: namesAndCountsOfPrincipalsInTheRange(
                    movieDateRange: $movieDateRange
                    principals: "directors"
                    numberOfNames: 10
                )
                top10Actors: namesAndCountsOfPrincipalsInTheRange(
                    movieDateRange: $movieDateRange
                    principals: "actors"
                    numberOfNames: 10
                )
                top10Decades: numberOfMoviesPerDecadeInTheRange(
                    movieDateRange: $movieDateRange
                    numberOfValues: 10
                )
                movieAgePreference: movieAgePreferenceInTheRange(
                    movieDateRange: $movieDateRange
                )
                myTopRatings: genresOrRatingsAndTheirCountsInTheRange(
                    movieDateRange: $movieDateRange
                    genreOrRating: "rating"
                    numberOfValues: 6
                )
                imdbRatingsComparedToMine: imdbRatingsScoreComparedToMine(
                    movieDateRange: $movieDateRange
                )
                top10TranslatedImdbRatings: numberOfMoviesPerTranslatedImdbRatingInTheRange(
                    movieDateRange: $movieDateRange
                    numberOfValues: 10
                )
            }
        }
    }
`;

interface TimeSpentData {
    numberOfMovies: number;
    daysSinceFirstMovie: number;
    daysSpentWatching: number;
    percentOfTimeSpentWatching: number;
    hoursSpentWatching: number;
    remainingMinutesSpentWatching: number;
}

interface MovieRangeDataProps {
    data: {
        postgres: {
            timeSpent: TimeSpentData;
            movieLength: MovieLengthProps;
            lists: {
                top10Genres: [string, string][];
                top10Directors: [string, string][];
                top10Actors: [string, string][];
                top10Decades: [string, string][];
                movieAgePreference: string;
                myTopRatings: [string, string][];
                imdbRatingsComparedToMine: string;
                top10TranslatedImdbRatings: [string, string][];
            };
        };
    };
    pageContext: {
        movieDateRange: string[];
        movieDateRanges: string[];
    };
}

const MovieRangeData: FunctionComponent<MovieRangeDataProps> = ({
    data,
    pageContext,
}: MovieRangeDataProps): ReactElement => {
    const fromDate = pageContext.movieDateRange[0];
    const untilDate = pageContext.movieDateRange[1];
    const [
        numberOfMovies,
        daysSinceFirstMovie,
        daysSpentWatching,
        percentOfTimeSpentWatching,
        hoursSpentWatching,
        remainingMinutesSpentWatching,
    ] = Object.values(data.postgres.timeSpent).map((value) => {
        return String(value);
    });

    const pageTitle = ` from ${fromDate} until ${untilDate}`;

    const listOfRanges: [string, string][] = [];
    pageContext.movieDateRanges.map((movieDate, i, movieDateRanges) => {
        const startRangeDate = movieDate;

        for (let j = i + 1; j < movieDateRanges.length; j++) {
            const endRangeDate = movieDateRanges[j];

            listOfRanges.push([startRangeDate, endRangeDate]);
        }
    });

    const [searchValue, setMovieRangeSearchValue] = React.useState('');

    const {
        longestMovie,
        shortestMovie,
        movieOfAverageLength,
    } = data.postgres.movieLength;

    const top10Genres = data.postgres.lists.top10Genres;
    const top10Directors = data.postgres.lists.top10Directors;
    const top10Actors = data.postgres.lists.top10Actors;
    const top10Decades = data.postgres.lists.top10Decades;
    const movieAgePreference = data.postgres.lists.movieAgePreference;
    const myRatingSystem: [string, string][] = [
        ['Sublime Lettuce', '9–10'],
        ['Amazing Savory', '7.9–8.9'],
        ['Great Onion', '6–7.8'],
        ['Good Tomato', '5–5.9'],
        ['Decent Carrot', '4–4.9'],
        ['Bad Eggplant', '1–3.9'],
    ];
    const myTopRatings = data.postgres.lists.myTopRatings;
    const imdbRatingsComparedToMine =
        data.postgres.lists.imdbRatingsComparedToMine;
    const top10TranslatedImdbRatings =
        data.postgres.lists.top10TranslatedImdbRatings;

    return (
        <Layout>
            <SEO title={pageTitle} />
            <MovieRangeSelector
                listOfRanges={listOfRanges}
                movieRangeSearchValue={searchValue}
                setMovieRangeSearchValue={setMovieRangeSearchValue}
            />
            <TimeSpent
                fromDate={fromDate}
                untilDate={untilDate}
                numberOfMoviesWatched={numberOfMovies}
                totalDaysSinceFirstMovie={daysSinceFirstMovie}
                totalDaysSpentWatchingMovies={daysSpentWatching}
                percentOfTimeSpentWatchingMovies={percentOfTimeSpentWatching}
                hoursAndMinutesSpentWatchingMovies={[
                    hoursSpentWatching,
                    remainingMinutesSpentWatching,
                ]}
            />
            <MovieLength
                longestMovie={longestMovie}
                shortestMovie={shortestMovie}
                movieOfAverageLength={movieOfAverageLength}
            />
            <List listType="genres" list={top10Genres} />
            <List listType="directors" list={top10Directors} />
            <List listType="actors" list={top10Actors} />
            <List
                listType="decades"
                list={top10Decades}
                miscSummaryData={movieAgePreference}
            />
            <List listType="rating system" list={myRatingSystem} />
            <List listType="my ratings" list={myTopRatings} />
            <List
                listType="imdb ratings"
                list={top10TranslatedImdbRatings}
                miscSummaryData={imdbRatingsComparedToMine}
            />
            <Footer />
        </Layout>
    );
};

export default MovieRangeData;
