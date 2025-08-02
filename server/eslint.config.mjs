import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: {...globals.browser, ...globals.node} } },
  pluginReact.configs.flat.recommended,
  {
    languageOptions: {
      ecmaVersion: 12,
      sourceType: "commonjs",
      globals: { ...globals.browser, ...globals.node }
    },
    linterOptions: {
      env: {
        browser: true,
        commonjs: true,
        es2021: true
      }
    },
    // extends: ["airbnb-base"],
    rules: {
      "no-console": "off",
      "quotes": ["error", "double"],
    }
  }
]);
