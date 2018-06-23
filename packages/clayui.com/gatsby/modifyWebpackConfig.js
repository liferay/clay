module.exports = ({ config, stage }) => {
    if (stage === "build-html") {
        config.loader("null", {
            test: /wowjs|clay-charts|clay-alert|clay-badge|clay-button|clay-dropdown/,
            loader: "null-loader",
        });
    }
};