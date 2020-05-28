import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

const movieRangeSearch = (
    movieRanges: string[],
    searchValue: string
): string[] => {
    const regexZeroOrMoreOfAnything = '.*';

    const searchValueInterspersedWithRegex = searchValue.replace(
        ' ',
        regexZeroOrMoreOfAnything
    );

    const searchTerm = RegExp(
        regexZeroOrMoreOfAnything +
            searchValueInterspersedWithRegex +
            regexZeroOrMoreOfAnything,
        'i'
    );

    return movieRanges.filter((range) => {
        const searchTermFoundInRange = searchTerm.test(range);
        if (searchTermFoundInRange) {
            return range;
        }
    });
};

interface MovieRangeListProps {
    movieRanges: string[];
    maxListLength?: number;
}

interface MovieRangeSelectorProps {
    listOfRanges: string[];
    movieRangeSearchValue: string;
    setMovieRangeSearchValue: (searchValue: string) => void;
}
