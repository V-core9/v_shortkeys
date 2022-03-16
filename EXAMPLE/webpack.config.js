const path = require('path');


module.exports = {
    entry: {
        vShortKeys: path.join(__dirname, 'source/appExample.js'),
    },
    mode: "development",
    target: 'web',
    output: {
        filename: `[name].js`,
        path: path.resolve(__dirname, `public/scripts`),
    },
};
