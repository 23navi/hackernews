### ESLint config

Using bun to setup ESLint `bun x @eslint/create-config`

Note: For some reason ~~`bun create @eslint/config`~~ is not working

```
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none (bec this is backend and we are not using vite or next)
✔ Does your project use TypeScript? · typescript
✔ Where does your code run? · node
The config that you've selected requires the following dependencies:

eslint, globals, @eslint/js, typescript-eslint
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · bun
```

This will create eslint.config.mjs in the server directory and we can install custom plugins and setup in eslint.config.mjs

Adding eslint plugins

`bun add --dev @eslint/compat eslint-config-prettier eslint-plugin-drizzle`

`@eslint/compat` and `eslint-plugin-drizzle` is for drizzle linting as it is not supported natively with eslint

We need restart eslint server after updating eslint.config.mjs for it to work fine `cmd + p -> >ESLint: Restart Server`

```
import { fixupPluginRules } from "@eslint/compat";
import pluginJs from "@eslint/js";
import eslintPrettierConfig from "eslint-config-prettier";
import drizzlePlugin from "eslint-plugin-drizzle";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPrettierConfig,
  {
    plugins: {
      drizzle: fixupPluginRules(drizzlePlugin),
    },
  },
];
```
