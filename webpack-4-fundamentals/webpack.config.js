const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');

const webpackConfig = (mode) =>
	mode !== 'none' ? require(`./config/webpack.${mode}`)(mode) : {};

module.exports = (env) => {
	const { mode = 'none' } = env;

	return webpackMerge.merge(
		{
			mode,
			output: {
				filename: 'bundle.js',
			},
			module: {
				rules: [
					{
						test: /\.jpe?g/,
						use: 'url-loader',
					},
				],
			},
			plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
		},
		webpackConfig(mode)
	);
};
