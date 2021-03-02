function typescriptPreset(env) {
	return {
		module: {
			rules: [
				{
					test: /\.ts/,
					use: 'ts-loader',
				},
			],
		},
	};
}

module.exports = typescriptPreset;
