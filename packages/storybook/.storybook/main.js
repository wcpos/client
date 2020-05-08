module.exports = {
	stories: ['../../common/src/**/*.stories.tsx'],

	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-actions/register',
		'@storybook/addon-knobs/register',
		'@storybook/addon-notes/register',
	],

	webpackFinal: async (config) => {
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
	},
};
