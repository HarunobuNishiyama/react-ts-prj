module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 6,
    tsconfigRootDir: __dirname,
    project: "./tsconfig.eslint.json",
  },
  // extendsから利用するためコメントアウト
  // plugins: ['react', '@typescript-eslint'],
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    // 'plugin:@typescript-eslint/eslint-recommended',
    // eslint:recommendedに含まれるルールを型チェックでカバーできるものは無効化とあったが公式に言及見当たらず
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "prettier",
  ],
  ignorePatterns: [
    ".eslintrc.js",
    "webpack.common.js",
    "webpack.prod.js",
    "webpack.dev.js",
    "babel.config.js",
  ],
};
