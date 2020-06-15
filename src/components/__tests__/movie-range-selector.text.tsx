import React from 'react';
import { render } from '@testing-library/react';
import MovieRangeSelector from '../movie-range-selector';

describe('Movie range selector component', () => {
    const searchTermTesting = (searchTerm: string, numberOfResults: number) => {
        const { getByLabelText, unmount } = render(
            <MovieRangeSelector
                listOfRanges={[
                    ['01 Jun 2016', '11 Mar 2017'],
                    ['01 Jun 2020', '11 Mar 2020'],
                    ['01 Jul 2016', '01 Jul 2017'],
                ]}
                movieRangeSearchValue={searchTerm}
                setMovieRangeSearchValue={(searchValue: string) => {
                    console.log(searchValue);
                }}
            />
        );

        const movieRanges: HTMLUListElement = getByLabelText(
            'movie-ranges'
        ) as HTMLUListElement;
        const searchResults: HTMLLIElement[] = Array.from(
            movieRanges.querySelectorAll('li')
        ) as HTMLLIElement[];

        expect(searchResults.length).toEqual(numberOfResults);

        unmount();
    };

});
