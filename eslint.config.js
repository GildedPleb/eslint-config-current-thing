import currentThing from "./src/config.js";
// import pathMark from "eslint-plugin-pathmark"
// import markdown from "eslint-plugin-markdown";

export default [
  ...currentThing(),
  // ...markdown.configs.recommended,
  // {
  //   files: ["**/*.md/**.js"],
  //   rules: {
  //     "no-undef": 2,
  //     "prettier/prettier": 2
  //   }
  // }
  // pathMark.configs.flat,
];

// export default [...currentThing({ disable: ["eslint-config-airbnb-base"] })];

// export default [
//   ...currentThing({
//     override: { "eslint-config-airbnb-base": { "no-restricted-syntax": 2 } },
//   }),
// ];
