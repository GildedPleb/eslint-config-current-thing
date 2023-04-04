import current from "./src/config.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

export const JSONConfig = require("./current.json");

export default current;
