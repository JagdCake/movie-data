import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement, ReactNode } from 'react';

interface ValuesAndCountsListProps {
    listSummary: ReactNode;
    listHeading: string;
    list: [string, string][];
}
