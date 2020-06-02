import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

interface MovieRuntimeSectionProps {
    sectionTitle: 'Longest runtime' | 'Shortest runtime' | 'Average runtime';
    movieTitle: string;
    movieRuntimeHours: string;
    movieRuntimeMinutes: string;
}


type MovieAndItsRuntime = [string, string];

interface MovieLengthProps {
    longestMovie: MovieAndItsRuntime;
    shortestMovie: MovieAndItsRuntime;
    movieOfAverageLength: MovieAndItsRuntime;
}
