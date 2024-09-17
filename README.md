Opinions: https://github.com/alan2207/bulletproof-react

## Features

### CSS & Component Library

- [Tailwind CSS](https://tailwindcss.com/) as a design system and CSS utilities library 👉 [Config](https://github.com/maurogestoso/next-starter/tree/main/tailwind.config.ts)
- [`shadcn/ui`](https://ui.shadcn.com/docs) as a component library
  - Import new components by running `npx shadcn@latest add <component_name>`
- [`lucide`](https://lucide.dev/) as an icons library

### Environment Variables

- [`t3-oss/tr-env`](https://github.com/t3-oss/t3-env), which is build on top of [`zod`](https://zod.dev/), to have type-safe environment variables 👉 [Schema definition](https://github.com/maurogestoso/next-starter/tree/main/src/env.ts)

### Linting and Formatting

- ESLint for linting 👉 [Config](https://github.com/maurogestoso/next-starter/tree/main/.eslintrc.json)
  - `check-file` plugin to enforce file naming conventions
  - [`eslint-plugin-n`](https://www.npmjs.com/package/eslint-plugin-n)
- Prettier for formatting 👉 [Config](https://github.com/maurogestoso/next-starter/tree/main/.prettierrc.json)
  - `sort-import` plugin to organize imports
  - `tailwindcss` plugin to sort class names
