import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import InfoCard from './info-card';
import ValuesAndCountsList from './values-and-counts-list';

interface ListProps {
    listType:
        | 'genres'
        | 'directors'
        | 'actors'
        | 'decades'
        | 'rating system'
        | 'my ratings'
        | 'imdb ratings';
    list: [string, string][];
}

const GenreList: FunctionComponent<GenreListProp> = ({
    list,
}: GenreListProp): ReactElement => {
    const topGenre = list[0][0];
    const genreSummary: ReactElement = (
        <p>
            <span>I mostly watch </span>
            <span className="highlight">{topGenre}</span>
            <span> movies, but I&apos;m open to every genre.</span>
        </p>
    );

    return (
        <InfoCard id="movie-genres">
            <ValuesAndCountsList
                listSummary={genreSummary}
                listHeading="Number of movies per genre"
                list={list}
            />
        </InfoCard>
    );
};

export default GenreList;
