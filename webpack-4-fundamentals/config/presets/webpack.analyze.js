const WebpackBundleAnalyzer = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin;

function analyze() {
	return {
		plugins: [new WebpackBundleAnalyzer()],
	};
}

module.exports = analyze;
