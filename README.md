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