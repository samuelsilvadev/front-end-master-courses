module.exports = (env) => {
	const { mode = 'none' } = env;

	return {
		mode,
		output: {
			filename: 'bundle.js',
		},
	};
};
