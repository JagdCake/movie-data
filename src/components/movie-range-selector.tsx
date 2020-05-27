import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

interface MovieRangeSelectorProps {
    listOfRanges: string[];
    movieRangeSearchValue: string;
    setMovieRangeSearchValue: (searchValue: string) => void;
}
