module.exports = (api, options, rootOptions) => {
  api.render('./template', { name: rootOptions.projectName })
  api.extendPackage({
    "scripts": {
      "serve": "vue-cli-service serve",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint",
      "commit": "npx git-cz"
    },
    "dependencies": {
      "axios": "^0.19.0",
      "babel-plugin-import": "^1.12.2",
      "minireset.css": "^0.0.6",
      "qs": "^6.9.1",
      "sums-components": "0.3.8",
      "vant": "^2.2.10",
      "vue-router": "^3.1.3",
      "vuex": "^3.0.1"
    },
    "devDependencies": {
      "git-cz": "^3.3.0",
      "postcss-px-to-viewport": "^1.1.1",
      "style-resources-loader": "^1.3.2",
      "vue-cli-plugin-style-resources-loader": "^0.1.4",
    },
    "eslintConfig": {
      "root": true,
      "env": {
        "node": true
      },
      "extends": [
        "plugin:vue/essential",
        "eslint:recommended"
      ],
      "rules": {},
      "parserOptions": {
        "parser": "babel-eslint"
      }
    },
    "browserslist": [
      "> 1%",
      "last 2 versions"
    ],
    "config": {
      "commitizen": {
        "path": "./node_modules/git-cz"
      }
    },
    "gitHooks": {
      "commit-msg": "node scripts/verifyCommitMsg.js"
    }
  })
}
