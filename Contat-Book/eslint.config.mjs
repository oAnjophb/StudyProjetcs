import globals from 'globals'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginJest from 'eslint-plugin-jest'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginMarkdown from 'eslint-plugin-markdown'
import eslintPluginPromise from 'eslint-plugin-promise'
import eslintPluginN from 'eslint-plugin-n'
import eslintPluginTypeScript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import eslintPluginJsonFiles from 'eslint-plugin-json-files'
import { off } from 'process'

const prettierRules = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 120,
  bracketSpacing: true,
  trailingComma: 'es5',
  arrowParens: 'always',
}

export default [
  {
    ignores: ['build/**', 'coverage/**', 'node_modules/**'],
  },
  {
    files: ['src/**/*.ts', 'test/**/*.ts'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
      jest: eslintPluginJest,
      import: eslintPluginImport,
      markdown: eslintPluginMarkdown,
      promise: eslintPluginPromise,
      eslintn: eslintPluginN,
      '@typescript-eslint': eslintPluginTypeScript,
    },
    rules: {
      'prettier/prettier': ['error', prettierRules],
      quotes: 'off',
      'no-debugger': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
        },
      ],
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
      'promise/always-return': 'warn',
      'promise/no-return-wrap': 'error',
      'promise/catch-or-return': 'error',
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
  },
  {
    files: ['*.js', '*.cjs', '*.mjs', '**/*.js', '**/*.cjs', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: globals.node,
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': ['error', prettierRules],
      quotes: ['error', 'single'],
    },
  },
  {
    files: ['*.json'],
    plugins: {
      'json-files': eslintPluginJsonFiles,
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
      },
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['**/*.md'],
    plugins: {
      markdown: eslintPluginMarkdown,
    },
    processor: 'markdown/markdown',
  },
  eslintConfigPrettier,
]