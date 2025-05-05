module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    // 'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
   
    'no-unused-vars': 'off',
    'import/no-duplicates': ['error', {"prefer-inline": true}],
    'import/no-unresolved': 'off',
    'space-before-function-paren': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'spaced-comment': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single'],
    'semi': ['warn', 'never'],
    'semi-spacing': ['error', { 'before': false, 'after': true }],
    'indent': ['error', 2],
    'space-infix-ops': 'error',
    'eqeqeq': 'error',
    'no-eq-null': 'error',
    'curly': 'error',
    'key-spacing': ['error', { 'mode': 'strict' }],
    'eol-last': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'no-multi-spaces': 'error',
    'no-sparse-arrays': 'warn',
    'no-mixed-spaces-and-tabs': 'error',
    'keyword-spacing': ['error', { 'after': true, 'before': true }],
    'space-before-blocks': 'error',
    'block-spacing': 'error',
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'no-undef': 'error',
    'array-callback-return': 'error',
    "comma-dangle": ["error", "always-multiline"]
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        "project": [
          "apps/*/tsconfig.app.json",
          "libs/*/tsconfig.lib.json",
          "tsconfig.json"
        ]
      }
    }
  }
};
