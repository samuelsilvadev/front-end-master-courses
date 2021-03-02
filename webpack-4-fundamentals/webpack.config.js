const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');

const webpackConfig = (mode) =>
	mode !== 'none' ? require(`./config/webpack.${mode}`)(mode) : {};

const loadPresets = (env) => {
	const { presets } = env;

	/** @type {string[]} */
	const flattenedPresets = [].concat(...[presets]);
	const builtPresets = flattenedPresets.map((preset) => {
		return require(`./config/presets/webpack.${preset}`)(env);
	});

	return webpackMerge.merge({}, ...builtPresets);
};

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
						use: [
							{
								loader: 'url-loader',
								options: {
									limit: 5000,
								},
							},
						],
					},
				],
			},
			plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
		},
		webpackConfig(mode),
		loadPresets(env)
	);
};
