import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

type MovieAndItsRuntime = [string, string];

interface MovieLengthProps {
    longestMovie: MovieAndItsRuntime;
    shortestMovie: MovieAndItsRuntime;
    movieOfAverageLength: MovieAndItsRuntime;
}
