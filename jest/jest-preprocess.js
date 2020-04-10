const babelOptions = {
	presets: [
		// '@babel/preset-env',
		// '@babel/preset-react',
		// '@babel/preset-typescript',
		'module:metro-react-native-babel-preset',
	],
	plugins: [
		// 'transform-class-properties',
		['@babel/plugin-proposal-decorators', { legacy: true }],
	],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
