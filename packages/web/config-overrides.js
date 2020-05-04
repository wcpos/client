const {
	override,
	babelInclude,
	addDecoratorsLegacy,
	addBabelPlugins,
	babelExclude,
	addBabelPresets,
	addWebpackResolve,
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
	// ...addBabelPresets([]),
	babelInclude([
		// tell Babel to include common files
		path.resolve('src'),
		path.resolve('../common/src'),
		path.resolve('../../node_modules/react-native-screens'),
		path.resolve('../../node_modules/react-native-reanimated'),
		path.resolve('../../node_modules/react-native-gesture-handler'),
	]),
	// babelExclude([]),
	addWebpackResolve({
		alias: {
			'react-native-linear-gradient': 'react-native-web-linear-gradient',
			// '@react-navigation/compat': path.resolve('../../node_modules/@react-navigation/compat/src'),
			// '@react-navigation/core': path.resolve('../../node_modules/@react-navigation/core/src'),
			// '@react-navigation/drawer': path.resolve('../../node_modules/@react-navigation/drawer/src'),
			// '@react-navigation/native-stack': path.resolve(
			// 	'../../node_modules/@react-navigation/native-stack/src'
			// ),
			// '@react-navigation/native': path.resolve('../../node_modules/@react-navigation/native/src'),
			// '@react-navigation/routers': path.resolve('../../node_modules/@react-navigation/routers/src'),
			// '@react-navigation/stack': path.resolve('../../node_modules/@react-navigation/stack/src'),
		},
	})
);
