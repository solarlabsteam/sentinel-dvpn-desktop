module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "no-empty": ["error", { "allowEmptyCatch": true }],
    "import/order": ["error", {"groups": ["builtin", "external", "parent", "sibling", "index"]}]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ],
  globals: {
    ipc: 'readonly',
    goog: 'readonly',
    __static: 'readonly'
  }
}
