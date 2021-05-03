const path = require("path");

module.exports = {
    mode: "production",
    target: "node",
    entry: {
        main: "./src/main.ts",
        transformerCheckstyle: "./src/transformer/checkstyle.ts",
        transformerEslint: "./src/transformer/eslint.ts",
        operatorFilter: "./src/operator/filter.ts",
        operatorMap: "./src/operator/map.ts",
    },
    output: {
        path: path.resolve(__dirname, "dist_test"),
        filename: "[name].js",
    },
    devtool: false,
    optimization: {
        minimize: false,
        splitChunks: {
            name: "vendor",
            chunks: "all",
        },
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
        modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
};
