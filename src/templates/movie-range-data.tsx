import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TimeSpent from '../components/time-spent';

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

    return (
        <Layout>
            <SEO title={pageTitle} />
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
        </Layout>
    );
};

export default MovieRangeData;
