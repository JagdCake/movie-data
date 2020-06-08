import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import InfoCard from './info-card';

const isoMonth: Function = (monthName: string): string => {
    // the month name format is the same as in the database
    switch (monthName) {
        case 'Jan':
            return '01';
        case 'Feb':
            return '02';
        case 'Mar':
            return '03';
        case 'Apr':
            return '04';
        case 'May':
            return '05';
        case 'Jun':
            return '06';
        case 'Jul':
            return '07';
        case 'Aug':
            return '08';
        case 'Sep':
            return '09';
        case 'Oct':
            return '10';
        case 'Nov':
            return '11';
        case 'Dec':
            return '12';
        default:
            throw Error(
                `The format of the month value "${monthName}" is incorrect.`
            );
    }
};

// function is meant to work only with dates that follow the format of
// the "watched on" fields from the database
export const isoDate: Function = (date: string): string => {
    const dayMonthYear = date.split(' ');

    const year = dayMonthYear[2];
    const monthName = dayMonthYear[1];
    const month = isoMonth(monthName);
    const day = dayMonthYear[0];

    return `${year}-${month}-${day}`;
};

interface TimeProp {
    dateTime: string;
    timeValue: string;
}

export const Time: FunctionComponent<TimeProp> = ({
    dateTime,
    timeValue,
}: TimeProp): ReactElement => {
    return (
        <time dateTime={dateTime} className="highlight">
            {timeValue}
        </time>
    );
};

interface TimeSpentProps {
    // first movie's "watched on" date
    fromDate: string;
    // last movie's "watched on" date
    untilDate: string;
    numberOfMoviesWatched: string;
    totalDaysSinceFirstMovie: string;
    totalDaysSpentWatchingMovies: string;
    percentOfTimeSpentWatchingMovies: string;
    hoursAndMinutesSpentWatchingMovies: [string, string];
}

const TimeSpent: FunctionComponent<TimeSpentProps> = ({
    fromDate,
    untilDate,
    numberOfMoviesWatched,
    totalDaysSinceFirstMovie,
    totalDaysSpentWatchingMovies,
    percentOfTimeSpentWatchingMovies,
    hoursAndMinutesSpentWatchingMovies,
}: TimeSpentProps): ReactElement => {
    return (
        <InfoCard id="time-spent">
            <section>
                <p>
                    <span>From </span>
                    <Time dateTime={isoDate(fromDate)} timeValue={fromDate} />
                    <span> until </span>
                    <Time dateTime={isoDate(untilDate)} timeValue={untilDate} />
                    <span>, I&apos;ve watched </span>
                    <strong className="highlight">
                        {numberOfMoviesWatched} movies
                    </strong>
                    <span>.</span>
                </p>
            </section>
            <section className="mt-4 pt-4 border-t-2 border-dashed">
                <p>
                    <span>Out of </span>
                    <Time
                        dateTime={`${totalDaysSinceFirstMovie}d`}
                        timeValue={totalDaysSinceFirstMovie}
                    />
                    <span> days, I&apos;ve spent </span>
                    <Time
                        dateTime={`${totalDaysSpentWatchingMovies}d`}
                        timeValue={totalDaysSpentWatchingMovies}
                    />
                    <span> watching films. That&apos;s </span>
                    <span className="highlight">
                        {percentOfTimeSpentWatchingMovies}%
                    </span>
                    <span> of my time.</span>
                </p>
            </section>
            <section className="mt-4 pt-4 border-t-2 border-dashed">
                <h1 className="font-bold">More precisely: </h1>
                <Time
                    dateTime={`${hoursAndMinutesSpentWatchingMovies[0]}h`}
                    timeValue={`${hoursAndMinutesSpentWatchingMovies[0]} hours`}
                />
                {hoursAndMinutesSpentWatchingMovies[1] != '0' && (
                    <>
                        <span> and </span>
                        <Time
                            dateTime={`${hoursAndMinutesSpentWatchingMovies[1]}m`}
                            timeValue={`
                                ${hoursAndMinutesSpentWatchingMovies[1]}${
                                hoursAndMinutesSpentWatchingMovies[1] === '1'
                                    ? ' minute'
                                    : ' minutes'
                            }`}
                        />
                    </>
                )}
                <span>.</span>
            </section>
        </InfoCard>
    );
};

export default TimeSpent;
