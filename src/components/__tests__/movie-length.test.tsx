import React from 'react';
import { render } from '@testing-library/react';
import MovieLength from '../movie-length';

describe('Movie length component', () => {
    it('should pluralize / singularize hours and minutes correctly', () => {
        const { getAllByText } = render(
            <MovieLength
                longestMovie={['', '2:59']}
                shortestMovie={['', '0:0']}
                movieOfAverageLength={['', '1:1']}
            />
        );

        const movieLength: HTMLTimeElement[] = getAllByText(
            /\d hour/
        ) as HTMLTimeElement[];

        const longestMovieLength: string | null = movieLength[0].textContent;
        expect(longestMovieLength).toEqual('2 hours and 59 minutes');

        const shortestMovieLength: string | null = movieLength[1].textContent;
        expect(shortestMovieLength).toEqual('0 hours');

        const movieOfAverageLengthLength: string | null =
            movieLength[2].textContent;
        expect(movieOfAverageLengthLength).toEqual('1 hour and 1 minute');
    });
});
