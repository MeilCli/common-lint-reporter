const path = require("path");

module.exports = {
    mode: "production",
    target: "node",
    entry: {
        main: "./src/main.ts",
        "transformer-checkstyle": "./src/transformer/checkstyle.ts",
        "transformer-eslint": "./src/transformer/eslint.ts",
        "operator-filter": "./src/operator/filter.ts",
        "operator-map": "./src/operator/map.ts",
        "operator-distinct": "./src/operator/distinct.ts",
        "operator-add": "./src/operator/add.ts",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    devtool: false,
    optimization: {
        minimize: false,
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                },
                graphql: {
                    test: /[\\/]graphql[\\/]/,
                    name: "graphql",
                },
            },
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
