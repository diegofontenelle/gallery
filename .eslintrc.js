module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['react-app', 'airbnb', 'plugin:prettier/recommended', 'prettier', 'prettier/react'],
  plugins: ['react-hooks'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    camelcase: [
      'error',
      {
        ignoreDestructuring: true,
      },
    ],
    'consistent-this': ['error', 'self'],
    semi: ['error', 'never'],

    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/sort-prop-types': 'error',
    'react/forbid-prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    
    radix: "off",
    'no-underscore-dangle': "off",
    "jsx-a11y/click-events-have-key-events": "warn",
    'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
      },
    ],
    'import/no-extraneous-dependencies': 0,
  },
}
