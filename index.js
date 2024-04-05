import current from "./src/config.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

export const JSONConfigTs = require("./current-ts.json");
export const JSONConfigJs = require("./current-js.json");
export const JSONConfigTest = require("./current-test.json");
export const JSONConfigJsx = require("./current-tsx.json");
export const JSONConfigTsx = require("./current-jsx.json");

export default current;
