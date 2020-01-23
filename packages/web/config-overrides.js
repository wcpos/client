const {
	override,
	babelInclude,
	addDecoratorsLegacy,
	addBabelPlugins,
	babelExclude,
	addBabelPresets,
} = require('customize-cra');
const path = require('path');

const addWorkerLoader = () => config => {
	config.output.globalObject = 'this';
	config.module.rules.unshift({ test: /\.worker\.js$/, use: { loader: 'worker-loader' } });
	return config;
};

module.exports = override(
	addWorkerLoader(),
	addDecoratorsLegacy(),
	...addBabelPlugins(
		'@babel/plugin-proposal-optional-chaining',
		'@babel/plugin-proposal-nullish-coalescing-operator'
	),
	// ...addBabelPresets([]),
	babelInclude([
		// tell Babel to include common files
		path.resolve('src'),
		path.resolve('../common/src'),
		// path.resolve('../../node_modules/@react-navigation'),
	])
	// babelExclude([])
);
