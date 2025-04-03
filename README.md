To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

open http://localhost:3000

Dev dependencies

We are using

1. prettier: for making our code format in a standard way.
2. @ianvs/prettier-plugin-sort-imports: for making our imports automatically sort in correct order.

### Prettier vs ESLint: What's the Difference?

Both Prettier and ESLint are tools used in JavaScript and TypeScript development to improve code quality, but they serve different purposes

Prettier: Code formatting (style) and focuses on Ensures consistent formatting. Eg: Extra spaces, semicolon usage, indentation

ESLint: Code linting (errors & best practices) focuses on Catches errors & enforces coding rules. Eg: Unused variables, missing dependencies, bad practices

Example

1. Prettier Example (Code Formatting)

Before Prettier:

```
function greet(name) { console.log("Hello, " + name);}
```

After Prettier:

```
function greet(name) {
  console.log("Hello, " + name);
}
```

2. ESLint Example (Code Linting & Best Practices)

Before ESLint (with a linting rule against var):

```
var age = 30;
console.log(age);
```

ESLint Error:

```
error  Unexpected var, use let or const instead  no-var
```

After Fixing:

```
let age = 30;
console.log(age);
```

### Prettier setup

Step 1: Setup .prettierignore (Top level, shared by both frontend and backend)

```
dist
build
node_modules
routeTree.gen.ts (This is for tanstack router)
```

Step 2: Setup prettier.config.js (Top level, shared by both frontend and backend)

```
/** @type {import('prettier').Config} */
module.exports = {
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(hono/(.*)$)|^(hono$)",
    "^(drizzle-orm/(.*)$)|^(drizzle-orm$)",
    "^(@tanstack/react-router/(.*)$)|^(@tanstack/react-router$)",
    "^(@tanstack/(.*)$)|^(@tanstack$)",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/shared/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
};
```

This will order our imports and we also have default prettier options.

Step 3: Setup script for formatting in package.json

```
 "scripts": {
    "format:write": "prettier . --write",
    "format:check": "prettier . --check"
  },
```

--write : // This will fix our code by making changes in files
--check : // This will only tell us all the changes which are required

Note: If we have prettier plugin in vscode, it will check and write on it's own on save, so we don't have to manually run these scripts but it is good to have it and run on commit to maintain code style across team.
