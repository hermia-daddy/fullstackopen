module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es6": true
    },
    "extends": ["eslint:recommended","plugin:react/recommended"],
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 2018,
        "ecmaFeatures": {
          "jsx": true,
          "modules": true,
          "experimentalObjectRestSpread": true
        }
    },
    "globals": {
      "window": true,
      "document":true
    },
    "rules": {
      "react/prop-types":["off"]
    }
};
