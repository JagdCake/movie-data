require('ts-node').register({ files: true });


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
    });
};
