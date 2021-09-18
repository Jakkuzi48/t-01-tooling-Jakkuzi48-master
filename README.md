# Task 01 - Tooling

## Prerequisites

- Installed **Node.js** - [download](https://nodejs.org/en/download/current/)
- (_Recommended_ ) Installed **Yarn** - `npm i --global yarn`

## Task

Your task is to set up a javascript project with npm and linting.

1. Create `package.json` by running `npm init` and following the setup instructions
1. Add `typescript` package as a **development dependency**
1. Add `eslint-config-haaxor1689s-config` package as a **development dependency**
   > [Documentation](https://yarnpkg.com/cli/add) of `yarn add` (_or `npm add` [documentation](https://docs.npmjs.com/cli/v7/commands/npm-install)_)
1. Set up `eslintConfig` and `prettier` to use the config we just downloaded ([npm registry page](https://www.npmjs.com/package/eslint-config-haaxor1689s-config) of the config)
   > [ESlint](https://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config) and [Prettier](https://prettier.io/docs/en/configuration.html#sharing-configurations) documentation on shareable configs
1. Add `build` and `lint` scripts to your `package.json` file
   ```json
   "build": "npx ts-node ./src/index.ts",
   "lint": "eslint \"./src/**/*.{ts,tsx}\" && prettier \"./src/**/*.{ts,tsx}\" --check"
   ```
   > You can run scripts with `yarn <<script>>` (_or `npm run <<script>>`_)
1. Fix all the linter erros and warning in `src/index.ts` file
   > [ESlint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for vs code

## Tips

- after pushing your solution, don't forget to go to the #1 `Feedback` pull request and label it with _Submitted_ label and make sure that the submit action succeeds
- using `_` to prefix unused variables that can't be easily omitted is a common pattern that is also enforced by linter config we use
- many of linter errors in `index.ts` can be [autofixed](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems)
- you can run eslint directly with `yarn eslint <<options>>` (_`npx eslint <<options>>`_)
- we have prepared a simple `tsconfig.json` file for this assignment which we will be talking more about in the next lecture
