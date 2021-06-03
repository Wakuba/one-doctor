module.exports = {
    extends: ['stylelint-config-standard'],
    plugins:['stylelint-order'],
    rules: {
      'at-rule-no-unknown': [
        true,
        {
          ignoreAtRules: [
            'extends',
            'tailwind',
            "apply",
            "variants",
            "responsive",
            "screen",],
        },
      ],
      'block-no-empty': null,
      'unit-whitelist': ['em', 'rem', 's'],
    },
  }
