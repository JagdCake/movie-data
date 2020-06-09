import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import InfoCard from '../components/info-card';

const NotFoundPage: FunctionComponent = (): ReactElement => (
    <Layout>
        <SEO title="not found" />
        <InfoCard id="no-data">
            <p>
                <span>Hi, you just hit a route that either </span>
                <strong className="highlight">doesn&apos;t exist</strong>
                <span> or for which there is </span>
                <strong className="highlight">no data available</strong>
                <span>. Please </span>
                <a href="/" className="highlight">
                    click here
                </a>
                <span> to return to the main page.</span>
            </p>
        </InfoCard>
    </Layout>
);

export default NotFoundPage;
