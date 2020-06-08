import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import InfoCard from './info-card';
import ValuesAndCountsList from './values-and-counts-list';

const genreListSummary = (topGenre: string): ReactElement => (
    <p>
        <span>I mostly watch </span>
        <span className="highlight">{topGenre}</span>
        <span> movies, but I&apos;m open to every genre.</span>
    </p>
);

const directorListSummary = (topDirector: string): ReactElement => (
    <p>
        <span className="highlight">{topDirector}</span>
        <span> stands out as a director.</span>
    </p>
);

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

const List: FunctionComponent<ListProps> = ({
    listType,
    list,
}: ListProps): ReactElement | null => {
    const topValue = list[0][0];

    switch (listType) {
        case 'genres':
            return (
                <InfoCard id="movie-genres">
                    <ValuesAndCountsList
                        listSummary={genreListSummary(topValue)}
                        listHeading="Number of movies per genre"
                        list={list}
                    />
                </InfoCard>
            );
    }

    return null;
};

export default List;
