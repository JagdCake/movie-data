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
