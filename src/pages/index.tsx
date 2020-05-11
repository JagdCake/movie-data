import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TimeSpent from '../components/time-spent';

const IndexPage: FunctionComponent = (): ReactElement => (
    <Layout>
        <SEO title="Home" />
        <TimeSpent
            fromDate="Jun 2016"
            untilDate="Dec 21 2019"
            numberOfMoviesWatched="672"
        />
    </Layout>
);

export default IndexPage;
