require('ts-node').register({ files: true });
const path = require('path');

// copied from ./src/components/time-spent.tsx because you can't import
// from ES6 modules in this file, in a straightforward way
const isoMonth = (monthName) => {
    // the month name format is the same as in the database
    switch (monthName) {
        case 'Jan':
            return '01';
        case 'Feb':
            return '02';
        case 'Mar':
            return '03';
        case 'Apr':
            return '04';
        case 'May':
            return '05';
        case 'Jun':
            return '06';
        case 'Jul':
            return '07';
        case 'Aug':
            return '08';
        case 'Sep':
            return '09';
        case 'Oct':
            return '10';
        case 'Nov':
            return '11';
        case 'Dec':
            return '12';
        default:
            throw Error(
                `The format of the month value "${monthName}" is incorrect.`
            );
    }
};

// copied from ./src/components/time-spent.tsx because you can't import
// from ES6 modules in this file, in a straightforward way
// function is meant to work only with dates that follow the format of
// the "watched on" fields from the database
const isoDate = (date) => {
    const dayMonthYear = date.split(' ');

    const year = dayMonthYear[2];
    const monthName = dayMonthYear[1];
    const month = isoMonth(monthName);
    const day = dayMonthYear[0];

    return `${year}-${month}-${day}`;
};

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
                    path: `${isoDate(startRangeDate)}_until_${isoDate(endRangeDate)}`,
                    component: path.resolve(`./src/templates/data-range.tsx`),
                    context: {
                        movieDateRange: [startRangeDate, endRangeDate],
                    },
                });
            }
        });
    });
};
