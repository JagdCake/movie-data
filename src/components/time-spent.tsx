import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

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
