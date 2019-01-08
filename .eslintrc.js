module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
    ecmaVersion: 9,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'arrow-body-style': 'off', // Incompatible with prettier
    'arrow-parens': 'off', // Incompatible with prettier
    'object-curly-newline': 'off', // Incompatible with prettier
    'function-paren-newline': 'off', // Incompatible with prettier
    indent: 'off', // Incompatible with prettier
    'implicit-arrow-linebreak': 'off', // Incompatible with prettier
    'space-before-function-paren': 'off', // Incompatible with prettier
    'no-confusing-arrow': 'off', // Incompatible with prettier
    'no-mixed-operators': 'off', // Incompatible with prettier
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
