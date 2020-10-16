const path = require('path');

module.exports = {
	stories: ['../../common/src/**/*.stories.tsx'],

	addons: [
		// '@storybook/preset-create-react-app',
		'@storybook/addon-essentials',
		'@storybook/addon-actions/register',
		'@storybook/addon-knobs/register',
		'@storybook/addon-notes/register',
	],

	webpackFinal: async (config) => {
		// const fs = require('fs');
		// fs.writeFile('test.txt', JSON.stringify(config, null, ' '), function (err, data) {
		// 	if (err) {
		// 		return console.log(err);
		// 	}
		// 	console.log(data);
		// });
		// console.log(config.module.rules[3].oneOf[2]);
		/** @TODO create less fragile way to remove svg from default config */
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
			test: /\.js$/,
			include: [path.resolve(__dirname, '../../../node_modules/react-native-gesture-handler/')],
			use: {
				loader: 'babel-loader',
				options: {
					cacheDirectory: false,
					presets: [
						['module:metro-react-native-babel-preset', { disableImportExportTransform: true }],
					],
				},
			},
		});

		config.module.rules.push({
			test: /\.svg$/,
			exclude: /node_modules/,
			use: [{ loader: '@svgr/webpack' }],
		});

		//
		config.resolve.alias = config.resolve.alias || {};
		config.resolve.alias['react-native'] = 'react-native-web'; // added by create-react-app config
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
