import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Index: FunctionComponent = (): ReactElement => (
    <Layout>
        <SEO title="" />
        <h1 className="text-center text-2xl bg-purple rounded-sm text-yellow p-2">
            Redirecting to the main page…
        </h1>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-64 text-purple fill-current"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </svg>
    </Layout>
);

export default Index;
