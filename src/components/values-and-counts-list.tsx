import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement, ReactNode } from 'react';

interface ValuesAndCountsListProps {
    listSummary: ReactNode;
    listHeading: string;
    list: [string, string][];
}

const ValuesAndCountsList: FunctionComponent<ValuesAndCountsListProps> = ({
    listSummary,
    listHeading,
    list,
}: ValuesAndCountsListProps): ReactElement => {
    return (
        <>
            <div className="mb-4 pb-4 border-b-2 border-dashed">
                {listSummary}
            </div>
            <section>
                <h1 className="font-bold text-center">{listHeading}</h1>
                <ul>
                    {list.map(([value, count], index) => (
                        <li
                            key={value + index.toString()}
                            className="py-2 flex justify-between border-b border-dotted"
                        >
                            <em>{value}</em>
                            <strong>{count}</strong>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default ValuesAndCountsList;
