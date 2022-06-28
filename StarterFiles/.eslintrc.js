module.exports = {
  extends: ['wesbos','@babel/preset-react'],
  rules: {
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': 'off',
    'global-require': 'off',
    'no-nested-ternary': 'off',
    'react/jsx-pascal-case': 'error',
  },
};
