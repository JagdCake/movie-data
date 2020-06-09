module.exports = {
    theme: {
        colors: {
            gray: '#EEF0F5',
            purple: '#221522',
            yellow: '#ffed66',
        },
        extend: {
            width: {
                '96': '24rem',
            },
        },
        screens: {
            sm: '414px',
        },
    },
    variants: {},
    plugins: [],
    purge: {
        // Filenames to scan for classes
        content: [
            './src/**/*.html',
            './src/**/*.js',
            './src/**/*.jsx',
            './src/**/*.ts',
            './src/**/*.tsx',
        ],
        // PurgeCSS options
        options: {
            // Whitelist specific selectors by name
            // whitelist: [],
        },
    },
};
