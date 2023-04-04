import currentThing from "./src/config.js";

export default [...currentThing()];

// export default [...currentThing({ disable: ["eslint-config-airbnb-base"] })];

// export default [
//   ...currentThing({
//     override: { "eslint-config-airbnb-base": { "no-restricted-syntax": 2 } },
//   }),
// ];
