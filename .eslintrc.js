module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "prettier"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "overrides": [
    {
      "files": [
        "*.ts"
      ]
    }
  ],
  "env": {
    "browser": true,
    "node": false
  },
  "parserOptions": {
    "project": "tsconfig.json",
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "prettier/prettier": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/ban-types": "warn",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": true
      }
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/no-namespace": "error",
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-irregular-whitespace": [
      "error",
      {
        "skipComments": true
      }
    ],
    "no-alert": "error",
    "prefer-const": "error",
    "no-return-assign": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-console": "off",
    "no-undef": "off",
    "no-unreachable": "off"
  }
};