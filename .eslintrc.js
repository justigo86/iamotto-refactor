module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "prettier",
    "plugin:prettier/recommended"
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "react-hooks", "prettier", "@typescript-eslint", "jest"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      },
    ],
    "@typescript-eslint/triple-slash-reference": "off",
    // "jsx-a11y/anchor-is-valid": [
    //   "error",
    //   {
    //     "components": ["Link"],
    //     "specialLink": ["hrefLeft", "hrefRight"],
    //     "aspects": ["invalidHref", "preferButton"]
    //   },
    // ],
  },
  settings: {
    react: {
      version: "detect",
    }
  }
}