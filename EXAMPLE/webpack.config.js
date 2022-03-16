const path = require('path');


module.exports = {
    entry: {
        version_1: path.join(__dirname, 'source/vShortKeys.js'),
        version_2: path.join(__dirname, 'source/vShortKeys.V2.js'),
    },
    mode: "development",
    target: 'web',
    output: {
        filename: `[name]-vShortKeys.js`,
        path: path.resolve(__dirname, `public/scripts`),
    },
};
