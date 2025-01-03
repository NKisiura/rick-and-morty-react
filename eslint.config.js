import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      eslintPluginPrettierRecommended,
    ],
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": hooksPlugin
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...hooksPlugin.configs.recommended.rules,
      "@typescript-eslint/no-unnecessary-type-parameters": "off",
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['lodash'],
              message: 'Import [module] from lodash-es instead',
            },
          ],
          paths: [
            {
              name: 'react',
              importNames: ['default'],
              message: "React doesn't need to be in scope since version 17",
            },
          ],
        },
      ],
    },
  },
);
