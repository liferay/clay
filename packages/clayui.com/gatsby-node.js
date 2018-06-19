exports.createPages = require('./gatsby/createPages');
exports.onCreateNode = require('./gatsby/onCreateNode');
exports.modifyWebpackConfig = ({ config, stage }) => {
    if (stage === "build-html") {
        config.loader("null", {
            test: /wowjs/,
            loader: "null-loader",
        });
    }
};