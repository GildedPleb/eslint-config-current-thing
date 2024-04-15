# TODOs

- Use the found conflicting rule to hyper-target the condense the conflict in a cheap, repeatable, and persistent way. (ie, lint given two configs, max, on a very small code set like `const a = 1;`). Ultimately this is a stretch goal because we still have to lint every config and rule against every other config and rule when any new rule is added and current setup is optimized for that.
- Upgrade to ESLint 9,
- Eject ALL CONFIGS. Add them as git sub modules in dedicated directories.
  - We then disconnect the loop of adding to downloading counts on NPM
  - We can update configs directly, meaning, we no longer have to worry about any one config being out of date.
  - And a second level of config generation where it parses all the flat config rules and spits out an optimized flat config with minimal dependancies? This is like doing ESLint Flat configs job for it? Making this config very fast? Who knows.
- Automatic monthly generation and publishing.
- Testing for: CSS, JSON, YML, i18n, a11y, md etc
- Make it so Parsing is also appropriately targeted by popularity. The upside here is that when a parser updates, it doesn't kill the _entire_ cache, plus it exposes more subtle difficulties and config problems (this has been tried once, but was abandonded for a reason i forget? Probably because of a massive difficulty spike to fix the new problems).
  - IIRC some configs apply typescript rules to both JS and TS files. And they do this is strange ways, where it might only be possible to move forward if a config is ejected.
  - Forcing the TS parser to only lint TS code, means that JS code will not (and can not) be as tightly linted. However, the upside is that TypeScript can effectively be turned off.
- These rules conflict:
  'es1' is declared but its value is never read.ts(6133)
  'es1' is assigned a value but never used.eslint@typescript-eslint/no-unused-vars
  'es1' is assigned a value but never used. Allowed unused vars must match /^\_/u.eslintunused-imports/no-unused-vars

as in, if i write \_es used.eslint@typescript-eslint/no-unused-vars should be off.

- Parse out so tha when you get an error, you only get 1 error from the leading config and all other errors are supressed.
- Do a post process filter to remove unused plugins and rules.
- The Cache doesnt get invalidated when a config becomes more specified: a config that applies to js and ts, when changed to js only, will not longer present rules for ts, so the ts cache might still be used.
- it would be good to get the two config generators to always be in line with eachother, but i'm not sure its worth it...
