require('ts-node').register({ files: true });
const path = require('path');


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // 48 is also the number of movies per page on my movies website
    const rangeOfMoviesToGenerateDataFrom = 48;

    return graphql(
        `
            query MovieDateRanges($range: Int!) {
                p: postgres {
                    m: movieById(id: 1) {
                        rangeOfMovieDates(range: $range)
                    }
                }
            }
        `,
        { range: rangeOfMoviesToGenerateDataFrom }
    ).then((result) => {
        if (result.errors) {
            throw result.errors;
        }

        const movieWatchedOnDateRanges = result.data.p.m.rangeOfMovieDates;

        // create pages to display movie data from each date until each
        // subsequent date, e.g. first date until second date, first
        // date until third date..., second date until third date an so
        // on
        movieWatchedOnDateRanges.map((movieDate, i) => {
            const startRangeDate = movieDate;

            for (let j = i + 1; j < movieWatchedOnDateRanges.length; j++) {
                const endRangeDate = movieWatchedOnDateRanges[j];

                createPage({
                    path: `${startRangeDate}_until_${endRangeDate}`,
                    component: path.resolve(`./src/templates/data-range.tsx`),
                    context: {
                        movieDateRange: [startRangeDate, endRangeDate],
                    },
                });
            }
        });
    });
};
