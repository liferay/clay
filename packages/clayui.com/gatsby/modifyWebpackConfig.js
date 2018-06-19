module.exports = ({ config, stage }) => {
    if (stage === "build-html") {
        config.loader("null", {
            test: /wowjs/,
            loader: "null-loader",
        });
    }
};