import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { Link } from 'gatsby';
import { isoDate } from './time-spent';

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

const MovieRangeList: FunctionComponent<MovieRangeListProps> = ({
    movieRanges,
    maxListLength = 7,
}: MovieRangeListProps): ReactElement[] => {
    const truncatedMovieRanges = movieRanges.slice(0, maxListLength);

    return truncatedMovieRanges.map(([startRange, endRange]) => (
        <li key={startRange + endRange} className="my-2">
            <Link
                to={`${isoDate(startRange)}_until_${isoDate(endRange)}`}
                className="p-2 rounded-sm hover:bg-purple hover:text-gray focus:bg-purple focus:text-gray"
            >
                {`${startRange} - ${endRange}`}
            </Link>
        </li>
    ));
};

interface MovieRangeSelectorProps {
    listOfRanges: string[];
    movieRangeSearchValue: string;
    setMovieRangeSearchValue: (searchValue: string) => void;
}
