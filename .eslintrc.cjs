module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      js: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    // Disable prop-types validation for Three.js components
    'react/forbid-foreign-prop-types': 'off',
    // Allow spreading props
    'react/jsx-props-no-spreading': 'off',
    // Allow jsx in .js files
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  globals: {
    THREE: 'readonly',
  },
};
