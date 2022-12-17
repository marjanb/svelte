module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['**/*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		"indent": ["error", 2],
		'no-multiple-empty-lines': 'warn',
		camelcase: ['warn'],
		'semi': [2, 'always'],
    'object-curly-spacing': ['error', 'always'],
		"comma-dangle": ["error", {
				"arrays": "always-multiline",
				"exports": "always-multiline",
				"functions": "never",
				"imports": "always-multiline",
				"objects": "always-multiline"
			}
		],
	}
};
