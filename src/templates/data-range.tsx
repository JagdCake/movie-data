import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { graphql } from 'gatsby';

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
