module.exports = {
  extends: [
    'airbnb',
    "prettier",
    "prettier/react"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react", "prettier", "import", "jsx-a11y", "babel", "react-hooks"],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": 0,
    "object-curly-spacing": ["error", "always"],
    "prettier/prettier": ["error", { printWidth: 110, singleQuote: true, arrowParens: "avoid" }],
  }
}
