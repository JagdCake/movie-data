import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage: FunctionComponent = (): ReactElement => (
    <Layout>
        <SEO title="Home" />
    </Layout>
);

export default IndexPage;
