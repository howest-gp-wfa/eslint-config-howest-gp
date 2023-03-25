module.exports = {
  env: {
    browser: true,
    es6: true
  },
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    "indent": ["error", 2],
    "no-unused-vars": "warn",
    "no-var": "error",
    "prefer-const": "error",
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "semi-style": ["error", "last"],
    "semi-spacing": ["error", {"before": false, "after": true}],
    "space-before-function-paren": ["error", "never"],
    "space-infix-ops": ["error", { "int32Hint": false }],
    "spaced-comment": ["error"],
    "vars-on-top": "error",
  }
};
