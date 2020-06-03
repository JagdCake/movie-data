import React from 'react';
import { ReactNode } from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

interface InfoCardProps {
    children: ReactNode;
    id: string;
}

const InfoCard: FunctionComponent<InfoCardProps> = ({
    children,
    id,
}: InfoCardProps): ReactElement => {
    return (
        <article
            id={id}
            aria-label="Info card"
            className="border-2 border-purple rounded-sm px-3 pb-6 text-lg shadow-lg my-8"
        >
            <a href={`#${id}`} className="card-link"></a>
            {children}
        </article>
    );
};

export default InfoCard;
