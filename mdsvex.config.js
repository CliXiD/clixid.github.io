import { createRequire } from "module";
const require = createRequire(import.meta.url)

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const mdsvexConfig = require("./mdsvex.config.cjs");
