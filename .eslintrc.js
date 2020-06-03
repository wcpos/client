module.exports = {
	root: true,
	env: {
		'react-native/react-native': true,
		'jest/globals': true,
	},
	extends: [
		'airbnb',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier/@typescript-eslint',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'jest', 'react-native', 'prettier'],
	rules: {
		'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
		'import/extensions': ['error', 'never'],
		'spaced-comment': ['error', 'always', { markers: ['/'] }],
		'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
		'react/prop-types': 'off',
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-wrap-multilines': [
			'error',
			{
				declaration: 'parens',
				assignment: 'parens',
				return: 'parens',
				arrow: 'parens',
				condition: 'ignore',
				logical: 'ignore',
				prop: 'ignore',
			},
		],
		'prettier/prettier': 'error',
	},
	settings: {
		'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
		react: {
			version: 'detect',
		},
	},
};

// module.exports = {
// 	parser: '@typescript-eslint/parser',
// 	extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
// 	plugins: ['@typescript-eslint', 'react', 'react-native', 'react-hooks'],
// 	rules: {
// 		indent: 'off',
// 		'@typescript-eslint/indent': ['error', 'tab'],
// 		'@typescript-eslint/explicit-function-return-type': 'off',
// 		'@typescript-eslint/explicit-member-accessibility': 'off',
// 		'@typescript-eslint/camelcase': 'off',
// 		'@typescript-eslint/prefer-interface': 'off',
// 		'react-hooks/rules-of-hooks': 'warn',
// 		'react-hooks/exhaustive-deps': 'warn',
// 	},
// };
