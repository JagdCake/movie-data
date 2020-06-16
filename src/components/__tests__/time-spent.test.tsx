import React from 'react';
import { render } from '@testing-library/react';
import TimeSpent from '../time-spent';

describe(`Time spent component's`, () => {
    describe('isoDate function', () => {
        it('should format "DD Month Year" dates as "Year-MM-DD"', () => {
            const { getByText } = render(
                <TimeSpent
                    fromDate="01 Jun 2016"
                    untilDate="15 Jun 2020"
                    numberOfMoviesWatched="0"
                    totalDaysSinceFirstMovie="0"
                    totalDaysSpentWatchingMovies="0"
                    percentOfTimeSpentWatchingMovies="0"
                    hoursAndMinutesSpentWatchingMovies={['0', '0']}
                />
            );

            const fromDate: HTMLTimeElement = getByText(
                /2016/
            ) as HTMLTimeElement;

            const fromDateIsoDate: string | null = fromDate.getAttribute(
                'datetime'
            );

            expect(fromDateIsoDate).toEqual('2016-06-01');
        });
    });
});
