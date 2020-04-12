module.exports = {
  "env": {
    "node": true,
    "browser": true,
    "jest": true,
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json",
    "tsconfigRootDir": __dirname,
  },
  "plugins": [
    "@typescript-eslint",
    "jest"
  ],
  "extends": [
    "airbnb-typescript",
    "plugin:jest/recommended"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"]}],
    "react/jsx-curly-brace-presence": [1, { "props": "never", "children": "ignore" }],
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "arrow-parens": [2, "as-needed", { "requireForBlockBody": true }],
    // Taken from https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js
    "no-prototype-builtins": "off",
    "react/destructuring-assignment": "off",
    "no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true },
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
  },

  "overrides": [
    {
      "files": ["*.styled.ts"],
      "rules": {
        "import/prefer-default-export": "off",
      },
    },
  ],
};
