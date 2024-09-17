export default {
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  tabWidth: 2,

  // import order plugin: https://github.com/trivago/prettier-plugin-sort-imports?tab=readme-ov-file#apis
  importOrder: [
    "^(react|next?/?([a-zA-Z]*))$",
    "<THIRD_PARTY_MODULES>",
    "^@/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
