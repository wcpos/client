const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');
const defaultAssetExts = require('metro-config/src/defaults/defaults').assetExts;
const defaultSourceExts = require('metro-config/src/defaults/defaults').sourceExts;

module.exports = {
	projectRoot: path.resolve(__dirname),
	watchFolders: [
		path.resolve(__dirname, '../../node_modules'),
		path.resolve(__dirname, '../common'),
		path.resolve(__dirname, '../storybook'),
	],
	resolver: {
		assetExts: [...defaultAssetExts.filter((ext) => ext !== 'svg'), 'md'],
		sourceExts: [...defaultSourceExts, 'svg'],
		blacklistRE: blacklist([
			// prevent react-native conflict in project root or common directory
			new RegExp(path.resolve(__dirname, '../../node_modules/react-native') + '/.*'),
			new RegExp(path.resolve(__dirname, '../common/node_modules/react-native') + '/.*'),
			new RegExp(path.resolve(__dirname, '../../node_modules/@storybook/react') + '/.*'),
		]),
		extraNodeModules: {
			'react-native': path.resolve(__dirname, 'node_modules/react-native'),
			'react-native-reanimated': path.resolve(__dirname, 'node_modules/react-native-reanimated'),
			'@storybook/react': path.resolve(__dirname, '../../node_modules/@storybook/react-native'),
		},
		// bundle .ios.tsx, .android.tsx and .native.tsx
		// platforms: ['native'],
	},
	transformer: {
		getTransformOptions: async () => ({
			transform: {
				experimentalImportSupport: false,
				inlineRequires: false,
			},
		}),
		babelTransformerPath: require.resolve('react-native-svg-transformer'),
	},
};
