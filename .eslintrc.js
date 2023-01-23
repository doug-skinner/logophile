module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    env: {
        node: true,
        es2020: true,
    },
    rules: {
        'prettier/prettier': ['error'],
        'import/no-anonymous-default-export': 'off',
        'no-console': 'error',
        '@typescript-eslint/no-var-requires': 'off',
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
}
