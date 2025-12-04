import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: globals.browser,
    },
    extends: [js.configs.recommended, prettier],
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: globals.browser,
    },
    extends: [...tseslint.configs.recommended, prettier],
  },
]);
