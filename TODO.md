# TODOs

- Use the found conflicting rule to hyper-target the condense the conflict in a cheap, repeatable, and persistent way. (ie, lint given two configs, max, on a very small code set like `const a = 1;`). Ultimately this is a stretch goal because we still have to lint every config and rule against every other config and rule when any new rule is added and current setup is optimized for that.
- Upgrade to ESLint 9,
- Eject ALL CONFIGS. Add them as git sub modules in dedicated directories.
  - We then disconnect the loop of adding to downloading counts on NPM
  - We can update configs directly, meaning, we no longer have to worry about any one config being out of date.
  - And a second level of config generation where it parses all the flat config rules and spits out an optimized flat config with minimal dependancies? This is like doing ESLint Flat configs job for it? Making this config very fast? Who knows.
- Automatic monthly generation and publishing.
- Testing for: CSS, JSON, YML, i18n, a11y, md etc
- These rules conflict:
  'es1' is declared but its value is never read.ts(6133)
  'es1' is assigned a value but never used.eslint@typescript-eslint/no-unused-vars
  'es1' is assigned a value but never used. Allowed unused vars must match /^\_/u.eslintunused-imports/no-unused-vars

as in, if i write \_es used.eslint@typescript-eslint/no-unused-vars should be off.

- Parse out so tha when you get an error, you only get 1 error from the leading config and all other errors are supressed.
- Do a post process filter to remove unused plugins and rules.
- The Cache doesnt get invalidated when a config becomes more specified: a config that applies to js and ts, when changed to js only, will no longer present rules for ts, so the ts cache might still be used.
- it would be good to get the two config generators to always be in line with each other, but i'm not sure its worth it...
- In the case where two configs are in conflict, but only when the entire config is run against the other entire config, we should default to both configs disabling the other entire config.
- Allow people to fully turn off a parser if they so choose.
