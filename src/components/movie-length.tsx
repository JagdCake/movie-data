import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { Time } from './time-spent';

interface MovieRuntimeSectionProps {
    sectionTitle: 'Longest runtime' | 'Shortest runtime' | 'Average runtime';
    movieTitle: string;
    movieRuntimeHours: string;
    movieRuntimeMinutes: string;
}

const MovieRuntimeSection: FunctionComponent<MovieRuntimeSectionProps> = ({
    sectionTitle,
    movieTitle,
    movieRuntimeHours,
    movieRuntimeMinutes,
}: MovieRuntimeSectionProps): ReactElement => {
    let timeValueHours: string;
    switch (movieRuntimeHours) {
        case '0':
            timeValueHours = '0 hours';
            break;
        case '1':
            timeValueHours = '1 hour';
            break;
        default:
            timeValueHours = `${movieRuntimeHours} hours`;
            break;
    }

    let timeValueMinutes: string;
    switch (movieRuntimeMinutes) {
        case '0':
            timeValueMinutes = '';
            break;
        case '1':
            timeValueMinutes = ' and 1 minute';
            break;
        default:
            timeValueMinutes = ` and ${movieRuntimeMinutes} minutes`;
            break;
    }

    return (
        <>
            <h1 className="font-bold">{sectionTitle}: </h1>
            <Time
                dateTime={`${movieRuntimeHours}H${movieRuntimeMinutes}M`}
                timeValue={timeValueHours + timeValueMinutes}
            />
            {movieTitle !== '' && (
                <h2>
                    <abbr title="for example">e.g.</abbr>
                    <em> {movieTitle}</em>
                </h2>
            )}
        </>
    );
};

type MovieAndItsRuntime = [string, string];

interface MovieLengthProps {
    longestMovie: MovieAndItsRuntime;
    shortestMovie: MovieAndItsRuntime;
    movieOfAverageLength: MovieAndItsRuntime;
}
