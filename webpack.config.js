const path = require('path');


module.exports = {
    entry: {
        game: './source/vShortKeys.js',
    },
    mode: "development",
    target: 'web',
    output: {
        filename: `vShortKeys.js`,
        path: path.resolve(__dirname, `public/scripts`),
    },
};
