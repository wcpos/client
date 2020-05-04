/**
 * From https://github.com/storybooks/storybook/issues/4739
 */
// const path = require('path');

module.exports = async ({ config, mode }) => {
	// `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
	// You can change the configuration based on that.
	// 'PRODUCTION' is used when building the static version of storybook.
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		loader: 'babel-loader',
		options: {
			presets: ['module:metro-react-native-babel-preset'],
		},
	});

	//
	config.resolve.alias = config.resolve.alias || {};
	config.resolve.alias['react-native'] = 'react-native-web';
	config.resolve.alias['react-native-linear-gradient'] = 'react-native-web-linear-gradient';

	// resolve .web.js before .js
	// required for react-native-svg
	config.resolve.extensions = [
		'.web.js',
		'.js',
		'.web.jsx',
		'.jsx',
		'.web.ts',
		'.ts',
		'.web.tsx',
		'.tsx',
		'.json',
	];

	// winston logging to file
	config.node = config.node || {};
	config.node.fs = 'empty';

	return config;
};
