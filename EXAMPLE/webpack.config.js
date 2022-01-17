const path = require('path');


module.exports = {
    entry: {
        game: path.join(__dirname, 'source/vShortKeys.js'),
    },
    mode: "development",
    target: 'web',
    output: {
        filename: `vShortKeys.js`,
        path: path.resolve(__dirname, `public/scripts`),
    },
};
