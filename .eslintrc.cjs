module.exports = {
	'root':true,
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/essential',
		'plugin:@typescript-eslint/recommended',
    'prettier',
	],
  'parser': "vue-eslint-parser",
	'parserOptions': {
		'ecmaVersion': 'latest',
		'parser': '@typescript-eslint/parser',
		'sourceType': 'module',
    "parser": "@typescript-eslint/parser",

	},
	'plugins': [
		'vue',
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
    "vue/no-multiple-template-root": 0,
    "vue/multi-word-component-names": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "no-unused-expressions": 0,
    "no-bitwise": 0,
    "no-unused-vars": 0, // interface
    "no-undef": 0,
    "import/prefer-default-export": 0,
    "no-param-reassign": 0,
    "vue/no-v-for-template-key": 0,
    "vue/no-v-model-argument": 0,
    "no-underscore-dangle": 0,
    "no-nested-ternary": 0,
	}
}
