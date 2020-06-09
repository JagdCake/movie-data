import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import InfoCard from './info-card';
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
            <h1 className="font-bold text-center pb-2">{sectionTitle}</h1>
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

export interface MovieLengthProps {
    longestMovie: MovieAndItsRuntime;
    shortestMovie: MovieAndItsRuntime;
    movieOfAverageLength: MovieAndItsRuntime;
}

const MovieLength: FunctionComponent<MovieLengthProps> = ({
    longestMovie,
    shortestMovie,
    movieOfAverageLength,
}: MovieLengthProps): ReactElement => {
    const longestMovieTitle = longestMovie[0];
    const shortestMovieTitle = shortestMovie[0];
    const movieOfAverageLengthTitle = movieOfAverageLength[0];

    const longestMovieRuntime = longestMovie[1].split(':');
    const shortestMovieRuntime = shortestMovie[1].split(':');
    const movieOfAverageLengthRuntime = movieOfAverageLength[1].split(':');

    return (
        <InfoCard id="movie-length">
            <section className="mb-4 pb-4 border-b-2 border-dashed">
                <MovieRuntimeSection
                    sectionTitle="Longest runtime"
                    movieTitle={longestMovieTitle}
                    movieRuntimeHours={longestMovieRuntime[0]}
                    movieRuntimeMinutes={longestMovieRuntime[1]}
                />
            </section>
            <section className="mb-4 pb-4 border-b-2 border-dashed">
                <MovieRuntimeSection
                    sectionTitle="Shortest runtime"
                    movieTitle={shortestMovieTitle}
                    movieRuntimeHours={shortestMovieRuntime[0]}
                    movieRuntimeMinutes={shortestMovieRuntime[1]}
                />
            </section>
            <section>
                <MovieRuntimeSection
                    sectionTitle="Average runtime"
                    movieTitle={movieOfAverageLengthTitle}
                    movieRuntimeHours={movieOfAverageLengthRuntime[0]}
                    movieRuntimeMinutes={movieOfAverageLengthRuntime[1]}
                />
            </section>
        </InfoCard>
    );
};

export default MovieLength;
