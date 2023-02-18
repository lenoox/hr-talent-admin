module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'no-empty-source': null,
    'selector-pseudo-element-no-unknown': null,
    'selector-max-compound-selectors': 5,
    'function-no-unknown': null,
    'no-invalid-position-at-import-rule': null,
  },
};
