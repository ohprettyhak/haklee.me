/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'next',
  ],
  env: {
    node: true,
    browser: true,
  },
  plugins: [
    'import',
    '@typescript-eslint',
    'prettier',
    'jsx-a11y',
    'react-hooks',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
    react: {
      version: 'detect',
    },
    next: {
      rootDir: 'apps/*/',
    },
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling'],
          'index',
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'prettier/prettier': 'warn',
    'no-console': [
      'error',
      {
        allow: ['error', 'warn'],
      },
    ],
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.*.js', 'node_modules/', 'gatsby-*'],
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
  parserOptions: {
    project: true,
  },
};
