module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		['@babel/plugin-proposal-decorators', { legacy: true }],
		'@babel/plugin-proposal-optional-chaining',
		'@babel/plugin-proposal-nullish-coalescing-operator',
		[
			'transform-inline-environment-variables',
			{
				include: ['NODE_ENV', 'REACT_APP_SENTRY_DSN'],
			},
		],
	],
};
