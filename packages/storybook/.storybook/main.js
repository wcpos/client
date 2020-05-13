module.exports = {
	stories: ['../../common/src/**/*.stories.tsx'],

	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-actions/register',
		'@storybook/addon-knobs/register',
		'@storybook/addon-notes/register',
	],

	webpackFinal: async (config) => {
		console.log(config.module.rules);
		config.module.rules[2] = {
			test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
			loader: '/Users/kilbot/Projects/wcpos-client/node_modules/file-loader/dist/cjs.js',
			query: { name: 'static/media/[name].[hash:8].[ext]' },
		};

		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			loader: 'babel-loader',
			options: {
				presets: ['module:metro-react-native-babel-preset'],
			},
		});

		config.module.rules.push({
			test: /\.svg$/,
			exclude: /node_modules/,
			use: [{ loader: '@svgr/webpack' }],
		});
		console.log(config.module.rules);

		//
		config.resolve.alias = config.resolve.alias || {};
		// config.resolve.alias['react-native'] = 'react-native-web'; // added by create-react-app config
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
			'.svg',
		];

		// winston logging to file
		config.node = config.node || {};
		config.node.fs = 'empty';

		return config;
	},
};
