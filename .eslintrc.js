module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  'rules': {
    // Disable eslint-plugin-filenames
    'filenames/match-regex': 0,
    'filenames/match-exported': 0,
    'filenames/no-index': 0,
    'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }],
    // Allow debugger during development
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-return-assign': 0,
    'no-unused-vars': ['off'],
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': ['off'],
    'semi': ['error', 'always'],
    'space-before-function-paren': ['error', 'never']
  }
};
