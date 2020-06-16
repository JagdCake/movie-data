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

        expect(movieRanges.innerHTML).not.toContain('<li>No Results</li>');
        expect(searchResults.length).toEqual(numberOfResults);

        unmount();
    };

    it('should display only search results which contain the search term', () => {
        searchTermTesting('jun', 2);
        searchTermTesting('jul', 1);
        searchTermTesting('2016', 2);
        searchTermTesting('01', 3);
    });

    it('should set search value on search box focus', () => {
        let searchValueState = '';

        render(
            <MovieRangeSelector
                listOfRanges={[['', '']]}
                movieRangeSearchValue=""
                setMovieRangeSearchValue={(searchValue: string) => {
                    searchValueState = searchValue;
                }}
            />
        );

        const searchBox: HTMLInputElement = document.querySelector(
            '#movie-range-search'
        ) as HTMLInputElement;

        expect(searchValueState).toEqual('');

        searchBox.focus();
        expect(searchValueState).toEqual(' ');
    });

    it('should hide the search results on click of the reset button', () => {
        let searchValueState =
            'this value makes sure that the search results list is displayed';

        const { getByLabelText, rerender } = render(
            <MovieRangeSelector
                listOfRanges={[['', '']]}
                movieRangeSearchValue={searchValueState}
                setMovieRangeSearchValue={(searchValue: string) => {
                    searchValueState = searchValue;
                }}
            />
        );

        const listOfSearchValues: HTMLUListElement = getByLabelText(
            'movie-ranges'
        ) as HTMLUListElement;
        expect(listOfSearchValues).toBeInTheDocument();

        const resetButton: HTMLButtonElement = getByLabelText(
            'clear search box'
        ) as HTMLButtonElement;
        resetButton.click();

        // rerender to pick up the new search value
        rerender(
            <MovieRangeSelector
                listOfRanges={[['', '']]}
                movieRangeSearchValue={searchValueState}
                setMovieRangeSearchValue={(searchValue: string) => {
                    searchValueState = searchValue;
                }}
            />
        );
        expect(listOfSearchValues).not.toBeInTheDocument();
    });
});
