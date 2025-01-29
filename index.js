import stylistic from '@stylistic/eslint-plugin';
import unocss from '@unocss/eslint-config/flat';
import importX from 'eslint-plugin-import-x';
import node from 'eslint-plugin-n';
import perfectionist from 'eslint-plugin-perfectionist';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import promise from 'eslint-plugin-promise';
import * as regexp from 'eslint-plugin-regexp';
import unicorn from 'eslint-plugin-unicorn';
import vue from 'eslint-plugin-vue';
import vueA11y from 'eslint-plugin-vuejs-accessibility';
import { config, configs } from 'typescript-eslint';

export default config(
  {
    ignores: ['@OLD/**', 'dist/**', 'node_modules/**'],
  },
  stylistic.configs['recommended-flat'],
  ...configs.strictTypeChecked,
  ...configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/lines-between-class-members': 'off',
      '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^(_)|(of)|(returns)|(type)' }],
    },
  },
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  importX.flatConfigs['stage-0'],
  node.configs["flat/recommended-script"],
  perfectionist.configs['recommended-natural'],
  promise.configs['flat/recommended'],
  regexp.configs['flat/recommended'],
  unocss,
  ...vue.configs['flat/recommended'],
  {
    rules: {
      'vue/attributes-order': 'off',
    },
  },
  {
    files: ['pages/**/*.vue', 'layouts/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  ...vueA11y.configs['flat/recommended'],
  {
    rules: {
      'vuejs-accessibility/anchor-has-content': ['error', { accessibleChildren: ['Icon'] }],
    },
  },
  unicorn.configs['flat/all'],
  {
    rules: {
      'unicorn/filename-case': 'off',
      'unicorn/prevent-abbreviations': ['error', { replacements: { btn: false, prop: false, props: false, ref: false, refs: false } }],
    },
  },
  prettierRecommended,
  {
    rules: {
      'comma-dangle': ['warn', 'always-multiline'],
      'max-len': 'off',
      'no-console': 'off',
      'no-restricted-syntax': [
        'error',
        {
          message:
            'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
          selector: 'ForInStatement',
        },
        { message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.', selector: 'LabeledStatement' },
        { message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.', selector: 'WithStatement' },
      ],
      'no-underscore-dangle': 'off',
      'no-void': 'off',
      semi: ['error', 'always'],
    },
  },
);
