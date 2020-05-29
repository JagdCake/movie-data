import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { Link } from 'gatsby';
import { isoDate } from './time-spent';

const movieRangeSearch = (
    movieRanges: [string, string][],
    searchValue: string
): [string, string][] => {
    const regexZeroOrMoreOfAnything = '.*';

    const searchValueInterspersedWithRegex = searchValue.replace(
        /\s/g,
        regexZeroOrMoreOfAnything
    );

    const searchTerm = RegExp(
        regexZeroOrMoreOfAnything +
            searchValueInterspersedWithRegex +
            regexZeroOrMoreOfAnything,
        'i'
    );

    return movieRanges.filter((range) => {
        const startAndEndRange = range.join(' ');
        const searchTermFoundInRange = searchTerm.test(startAndEndRange);

        if (searchTermFoundInRange) {
            return range;
        }
    });
};

interface MovieRangeListProps {
    movieRanges: [string, string][];
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
    listOfRanges: [string, string][];
    movieRangeSearchValue: string;
    setMovieRangeSearchValue: (searchValue: string) => void;
}

const MovieRangeSelector: FunctionComponent<MovieRangeSelectorProps> = ({
    listOfRanges,
    movieRangeSearchValue,
    setMovieRangeSearchValue,
}: MovieRangeSelectorProps): ReactElement => {
    const movieRanges = movieRangeSearch(listOfRanges, movieRangeSearchValue);

    return (
        <article className="w-8/12 mb-8 mx-auto relative text-center">
            <label htmlFor="movie-range-search">Select movie data range:</label>
            <input
                id="movie-range-search"
                type="search"
                className="w-full p-2 border-2 border-purple"
                onChange={(e) => {
                    const searchValue = e.target.value;

                    setTimeout(() => {
                        setMovieRangeSearchValue(searchValue);
                    }, 500);
                }}
            />
            {movieRangeSearchValue != '' && (
                <ul
                    aria-label="movie-ranges"
                    className="w-full absolute z-10 text-sm py-2 bg-gray text-purple border-t-0 border-2 border-purple"
                >
                    {movieRanges.length === 0 && <li>No Results</li>}
                    {movieRanges.length > 0 && (
                        <MovieRangeList movieRanges={movieRanges} />
                    )}
                </ul>
            )}
    );
};

export default MovieRangeSelector;
