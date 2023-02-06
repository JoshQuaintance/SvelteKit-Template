module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json']
    },
    extends: ['airbnb-base', 'airbnb-typescript/base', 'plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: ['svelte3', '@typescript-eslint'],
    ignorePatterns: ['*.cjs', '*.config.js'],
    overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
    settings: {
        'svelte3/typescript': () => require('typescript')
    },
    rules: {
        'import/no-extraneous-dependencies': [0]
    },
    env: {
        browser: true,
        es2017: true,
        node: true
    }
};
