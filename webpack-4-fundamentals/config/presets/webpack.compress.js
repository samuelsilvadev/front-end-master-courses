const CompressionWebpackPlugin = require('compression-webpack-plugin');

function compress() {
	return {
		plugins: [new CompressionWebpackPlugin()],
	};
}

module.exports = compress;
