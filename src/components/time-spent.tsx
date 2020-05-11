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
const isoDate: Function = (date: string): string => {
    const monthDayYear = date.split(' ');

    const year = monthDayYear[2];
    const monthName = monthDayYear[0];
    const month = isoMonth(monthName);
    const day = monthDayYear[1];

    // some of the movies have "watched on" dates consisting only of a
    // month name and a year
    const dayIsActuallyYear = day.length === 4;

    if (dayIsActuallyYear) {
        const year = day;
        return `${year}-${month}`;
    }

    return `${year}-${month}-${day}`;
};

interface TimeProp {
    date: string;
}

const Time: FunctionComponent<TimeProp> = ({
    date,
}: TimeProp): ReactElement => {
    return (
        <time
            dateTime={isoDate(date)}
            className="p-1 bg-purple text-gray rounded-sm"
        >
            {date}
        </time>
    );
};

interface DaysProp {
    numberOfDays: string;
}

const Days: FunctionComponent<DaysProp> = ({
    numberOfDays,
}: DaysProp): ReactElement => (
    <time
        dateTime={`${numberOfDays}d`}
        className="p-1 bg-purple text-gray rounded-sm"
    >
        {numberOfDays}
    </time>
);

const timeSpanInDays: Function = (
    firstDate: string,
    secondDate: string
): string => {
    const firstDateInMilliseconds = new Date(firstDate).getTime();
    const secondDateInMilliseconds = new Date(secondDate).getTime();

    const spanInMilliseconds =
        secondDateInMilliseconds - firstDateInMilliseconds;

    const spanInSeconds = spanInMilliseconds / 1000;
    const spanInMinutes = spanInSeconds / 60;
    const spanInHours = spanInMinutes / 60;
    const spanInDays = spanInHours / 24;

    return spanInDays.toString();
};

interface TimeSpentProps {
    // first movie's "watched on" date
    fromDate: string;
    // last movie's "watched on" date
    untilDate: string;
    numberOfMoviesWatched: string;
}

const TimeSpent: FunctionComponent<TimeSpentProps> = ({
    fromDate,
    untilDate,
    numberOfMoviesWatched,
}: TimeSpentProps): ReactElement => {
    return (
        <InfoCard id="time-spent">
            <section>
                <p>
                    <span>From </span>
                    <Time date={fromDate} />
                    <span> until </span>
                    <Time date={untilDate} />
                    <span>, I&apos;ve watched </span>
                    <strong className="p-1 bg-purple text-gray rounded-sm">
                        {numberOfMoviesWatched} movies
                    </strong>
                    <span>.</span>
                </p>
            </section>
            <section className="mt-4 pt-4 border-t-2 border-dashed">
                <p>
                    <span>Out of </span>
                    <Days numberOfDays="1298" />
                    <span> days, I&apos;ve spent </span>
                    <Days numberOfDays="55" />
                    <span> watching films. That&apos;s </span>
                    <strong className="p-1 bg-purple text-gray rounded-sm">
                        4.2%
                    </strong>
                    <span> of my time.</span>
                </p>
            </section>
        </InfoCard>
    );
};

export default TimeSpent;
