## JC Movie Data

Displays information generated using movie data from
<https://movies.jagdcake.com>. There isn't much data to work with but
it's enough to give a decent overview of my film-viewing hobby.
Information is categorized using cards, most of which consist of a brief
summary followed by a top 10 list. You can also search for data from
different time periods.

### First Time Setup

1. Database
    - make sure you have PostgreSQL (version 10+) installed and running
    - download database dump from a
      [release](https://github.com/jagdcake/i-watched-a-movie/releases)
    - create a database for the movies `psql -d [DATABASE USER] -c "create database [DATABASE NAME]"`
    - extract the database dump `tar -xavf database_dump.movies.tar.xz`
    - import the database dump `psql -U [DATABASE USER] -d [DATABASE NAME] < movies_dump`
    - create a testing database `psql -d [DATABASE USER] -c "create database test_[DATABASE NAME] with template [DATABASE NAME]"`
        - open [package.json](./package.json) and update
          `"test-db": "psql -d test_[DATABASE NAME] -f database-functions.test.sql"`
          in the `"scripts"` section
    - open [gatsby-config.js](./gatsby-config.js) and update
      `connectionString: postgres:///[DATABASE NAME]` in the
      `gatsby-source-pg` options

1. Install dependencies
    - `npm install` / `yarn install`

1. Start the development server
    - `npm run develop` / `yarn run develop`
    - the site will be running at `http://localhost:8000`

1. Generate static files to get ready for deployment
    - `npm run build` / `yarn run build`
