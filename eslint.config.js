import eslintPlugin from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from 'globals'
import prettier from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser'
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
export default [
  {
    ignores: [
      'dist/**',
      '**/*.d.ts',
      '**/*vite.config.ts',
    ]
  },
  
  eslintPlugin.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginUnicorn.configs.recommended,
 
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
        ecmaVersion: 2023,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
     prettier,
    },
    rules: {
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-for-each': 'error',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-null': 'off',
      'unicorn/number-literal-case': 'off',
      'unicorn/numeric-separators-style': 'off',
      'unicorn/prefer-global-this': 'off',
    },
  },
]
