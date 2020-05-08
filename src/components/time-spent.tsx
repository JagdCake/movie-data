import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

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
            dateTime={date}
            className="p-1 bg-purple text-gray rounded-sm"
        >
            {date}
        </time>
    );
};
