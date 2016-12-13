module.exports = {
  "extends": "google",
  "env": {
    "node": true
  },
  "rules": {
    "max-len": [2, 100, {
      "ignoreComments": true,
      "ignoreUrls": true,
      "tabWidth": 2
    }],
    "no-implicit-coercion": [2, {
      "boolean": false,
      "number": true,
      "string": true
    }],
    "no-unused-expressions": [2, {
      "allowShortCircuit": true,
      "allowTernary": false
    }],
    "no-unused-vars": [2, {
      "vars": "all",
      "args": "after-used",
      "argsIgnorePattern": "(^reject$|^_$)",
      "varsIgnorePattern": "(^_$)"
    }],
    "brace-style": [2, "1tbs", {
      "allowSingleLine": true
    }],
    "quotes": [2, "single"],
    "require-jsdoc": 0,
    "valid-jsdoc": 0,
    "comma-dangle": 0,
    "prefer-const": 2,
    // Compat: support for rest params is behind a flag for node v5.x
    "prefer-rest-params": 0,
    "arrow-parens": 0,
    "strict": [2, "global"]
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "globalReturn": true,
      "jsx": false,
      "experimentalObjectRestSpread": false
    },
    "sourceType": "script"
  }
}
