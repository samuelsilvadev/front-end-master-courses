const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');

const webpackConfig = (mode) => require(`./config/webpack.${mode}`)(mode);

module.exports = (env) => {
	const { mode = 'none' } = env;

	return webpackMerge.merge(
		{
			mode,
			output: {
				filename: 'bundle.js',
			},
			plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
		},
		webpackConfig(mode)
	);
};
