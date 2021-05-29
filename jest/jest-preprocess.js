const babelJest = require('babel-jest').default;

const babelOptions = {
	rootMode: 'upward',
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

const transformer = babelJest.createTransformer(babelOptions);
module.exports = transformer;
