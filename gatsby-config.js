require('ts-node').register({ files: true });

module.exports = {
    siteMetadata: {
        title: `JC Movie Data`,
        description: `Displays information generated using movie data from https://movies.jagdcake.com`,
        author: `JagdCake`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-typescript`,
        `gatsby-plugin-postcss`,
        {
            resolve: 'gatsby-source-pg',
            options: {
                connectionString: 'postgres:///movies',
                schema: 'public',
                refetchInterval: 86400, // Refetch data every 24 hours
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
