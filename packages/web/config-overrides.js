const {
	override,
	babelInclude,
	addDecoratorsLegacy,
	addBabelPlugins,
	addWebpackAlias,
	addWebpackModuleRule,
	addBundleVisualizer,
} = require('customize-cra');
const path = require('path');

const addWorkerLoader = () => (config) => {
	config.output.globalObject = 'this';
	config.module.rules.unshift({ test: /\.worker\.js$/, use: { loader: 'worker-loader' } });
	return config;
};

module.exports = override(
	addWorkerLoader(),
	addDecoratorsLegacy(),
	...addBabelPlugins(
		// 'babel-plugin-react-native-web',
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-optional-chaining',
		'@babel/plugin-proposal-nullish-coalescing-operator'
		// '@babel/plugin-proposal-export-default-from'
	),
	babelInclude([
		// tell Babel to include common files
		path.resolve('src'),
		path.resolve('../common/src'),
		path.resolve('../../node_modules/react-native-screens'),
		path.resolve('../../node_modules/react-native-reanimated'),
		path.resolve('../../node_modules/react-native-gesture-handler'),
	]),
	addWebpackAlias({
		'react-native-linear-gradient': 'react-native-web-linear-gradient',
	}),
	addWebpackModuleRule({
		test: /\.svg$/,
		exclude: /node_modules/,
		use: [{ loader: '@svgr/webpack' }],
	}),
	addBundleVisualizer({ openAnalyzer: false })
);
