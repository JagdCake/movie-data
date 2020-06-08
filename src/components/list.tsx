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

const actorListSummary = (topActor: string): ReactElement => (
    <p>
        <span>Looks like </span>
        <span className="highlight">{topActor}</span>
        <span> is popular.</span>
    </p>
);

const decadeListSummary = (
    movieAge: string,
    topDecade: string
): ReactElement => (
    <p>
        <span>I seem to prefer </span>
        <span className="highlight">{movieAge}</span>
        <span> movies, from the </span>
        <span className="highlight">{topDecade}</span>
        <span>.</span>
    </p>
);

const ratingSystemSummary = (): ReactElement => (
    <p>
        <span>I have a </span>
        <span className="highlight">food inspired</span>
        <span> rating system.</span>
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
    miscSummaryData?: string;
}

const List: FunctionComponent<ListProps> = ({
    listType,
    list,
    miscSummaryData = '',
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
        case 'directors':
            return (
                <InfoCard id="movie-directors">
                    <ValuesAndCountsList
                        listSummary={directorListSummary(topValue)}
                        listHeading="Number of movies directed by"
                        list={list}
                    />
                </InfoCard>
            );
        case 'actors':
            return (
                <InfoCard id="movie-actors">
                    <ValuesAndCountsList
                        listSummary={actorListSummary(topValue)}
                        listHeading="Number of movies starring"
                        list={list}
                    />
                </InfoCard>
            );
        case 'decades':
            return (
                <InfoCard id="movie-decades">
                    <ValuesAndCountsList
                        listSummary={decadeListSummary(
                            miscSummaryData,
                            topValue
                        )}
                        listHeading="Number of movies per decade"
                        list={list}
                    />
                </InfoCard>
            );
        case 'rating system':
            return (
                <InfoCard id="movie-rating-system">
                    <ValuesAndCountsList
                        listSummary={ratingSystemSummary()}
                        listHeading="My ratings compared to IMDb stars"
                        list={list}
                    />
                </InfoCard>
            );

        default:
            return null;
    }
};

export default List;
