import currentThing from "./src/config.js";
// import pathMark from "eslint-plugin-pathmark"

export default [
  ...currentThing(),
  // pathMark.configs.flat,
];

// export default [...currentThing({ disable: ["eslint-config-airbnb-base"] })];

// export default [
//   ...currentThing({
//     override: { "eslint-config-airbnb-base": { "no-restricted-syntax": 2 } },
//   }),
// ];
