# Lint The Current Thing

<img src="./static/current_thing.jpg" alt="I support the Current Thing" width="200" style=""/>

An **extremely unopinionated** config based on an automatically generated popularity contest between the most downloaded ESLint configs/plugins/parsers/rules.

**_Now with automated conflict discovery and mitigation!_**

> _"Finally, we have a config we all equally hate!"_

---

Linting is too opinionated. In fact, it can become political. `Eslint Config Current Thing` generates an ESLint config objectively based on whatever the current thing is at the time of build w/r/t broad ecosystem-wide definitions and opinion around JavaScript linting. Now, those political preferences can be exposed for what they are and market competition can settle the debate.

Presently, lint the current thing combines these configs (and their plugins, submodules, etc.):

<!-- Start Generated List of Configs DO NOT EDIT! -->

|                              |                             |                                          |                     |
| ---------------------------- | --------------------------- | ---------------------------------------- | ------------------- |
| AirBnb                       | AirBnb Base                 | AirBnb-Typescript                        | Ava                 |
| CSS Modules                  | Chai Friendly               | Comments                                 | Compat              |
| Create React App             | Cypress                     | ES-X                                     | ESLint              |
| Emotion CSS                  | Functional                  | Google                                   | GraphQL             |
| Import                       | Internationalization (i18n) | JSDoc                                    | JSONC               |
| JSX Accessibility (JSX A11y) | Jasmine                     | Jest                                     | Jest Dom            |
| Jest Formatting              | MDX                         | Markdown                                 | Microsoft SDL       |
| Mocha                        | NextJS                      | No Only Tests                            | No Unsanitized      |
| No Unused Imports            | No Use Extend Native        | Node.js                                  | Perfectionist       |
| Playwright                   | Prefer Arrow                | Prettier                                 | Promises            |
| React                        | React Hooks                 | React Native (Independent Plugin/Config) | React Native Config |
| React Native Plugin          | React Performance           | React Prefer Function Component          | React Refresh       |
| Regular Expressions          | RxJS                        | Security                                 | Shopify             |
| Simple Import Sort           | SonarJS                     | Sort Class Members                       | Standard            |
| Standard JSX                 | Standard React              | Standard TS                              | Storybook           |
| Stylistic                    | TSDoc                       | Tailwind CSS                             | Testing Library     |
| TypeScript                   | Typescript Sort Keys        | Unicorn                                  | XO                  |
| YML                          | You Don't Need Lodash       |                                          |                     |

<!-- End Generated List of Configs DO NOT EDIT! -->

The winning (and thus supported) high-level architecture is:

| Types        | FrontEnd                 | Testing |
| ------------ | ------------------------ | ------- |
| `Typescript` | `React` / `React Native` | `Jest`  |

## Technical explainer

This is a meta-config of many configs. The basic idea is that Linting is usually incrementally added in and teams have no reason or time to sit down like AirBnB and justify and debate every last ESLint rule, but they do all sit down and figure something out. Over time, hundreds of eslint plugins and configurations have emerged with various levels of popularity and maintenance, but they usually only address the small set of things that the team who developed them needed to address and invariably miss something--this is complicated by the fact that NPM does not make searching for ESLint configs/plugins easy. Then, the JS ecosystem moves to the next framework, the config goes out of maintenance and rules become irrelevant/bad and everybody has to solve the same problems again (welcome to FOSS!). Lint The Current Thing essentially grabs as many rules as possible, indiscriminately, provided they meet minimum thresholds of quality, and compares each rule on a popularity contest, so whatever the Current Thing is (provided you update your packages) that will fundamentally be tied to ecosystem-wide best practices as supported by the most people--this is to say Lint The Current Thing produces code that is accessible to the widest possible set of developers and stays in-step with the ecosystem. You can read more in the ["Why is this a good idea?"](#why-is-this-a-good-idea) section.

<!-- Start Generated Rule Counts DO NOT EDIT! -->

Unsurprisingly, it is incredibly strict with popularity-based opinions on:

- **1261** TSX rules
- **1236** Testing rules
- **1208** JSX rules
- **1099** Typescript rules
- **1056** Javascript rules
- **33** JSON rules
- **24** YML rules
- **5** MD rules

<!-- End Generated Rule Counts DO NOT EDIT! -->

Surprisingly, _it works_.

---

## Install

This config is premised on the [new ESLint Flat Config](https://eslint.org/blog/2022/08/new-config-system-part-1/), so it needs a `eslint.config.js`. Obviously, it requires `eslint` and `typescript` as well.

```bash
npm i -D eslint-config-current-thing
```

Then in your `eslint.config.js`

```js
import currentThing from "eslint-config-current-thing";

const config = [...currentThing()];

export default config;
```

You'll also probably want something like this in your `package.json` (edit accordingly):

```json
{
  "type": "module",
  "prettier": {},
  "remarkConfig": {
    "plugins": ["remark-preset-lint-recommended"]
  },
  "engines": {
    "node": ">=20.0.0"
  },
  "browserslist": [
    "defaults and supports es6-module",
    "maintained node versions"
  ]
}
```

And if you are using VS Code, you should get the extension for ESLint `dbaeumer.vscode-eslint` where you will need to add this to your `settings.json`:

```json
{
  "eslint.experimental.useFlatConfig": true
}
```

And you'll probably want to restart your ESLint server, maybe more than once. `Command Pallet` > `Restart ESLint Server`

Oh god, what have we done.

---

## Usage

```js
import currentThing from "eslint-config-current-thing";

const config = [
  // Rules here will be overridden by the current thing, if they collide
  ...currentThing(),
  // Rules here will override the current thing, if they collide
];

export default config;
```

### Options

Presently, there are three options: `disable`, `override`, and `threshold`.

For `disable` and `override` a few configs will have internal configs or overrides, for instance `shopify` has a config for `esnext`, `react`, and others. These can be targeted via adding a secondary namespace, ie, `@shopify/eslint-plugin/jest` (all lowercase, but look up in the source def for exact targets).

#### `disable`

To disable the entirety of a particular config, that config must be named via its package name, like so:

```js
import currentThing from "eslint-config-current-thing";

const config = [...currentThing({ disable: ["eslint-config-import"] })];

export default config;
```

E.g. if you disable every config, in order from the most downloaded down, until you hit `functional`, then functional will be your leading config and your project will then be linted with the recommended functional style.

**WARNING: `disable` may have unintended consequences where the linted code might get into an irreconcilable state, as various configs can toggle rules. We attempt to guard against this with automated conflict resolution but things can still sneak by.**

#### `override`

In the event that you need to override or change a rule in order with respect to all other rules:

```js
import currentThing from "eslint-config-current-thing";

const config = [
  ...currentThing({
    override: { "eslint-config-airbnb": { "no-restricted-syntax": 2 } },
  }),
];

export default config;
```

`override` will not clear existing rules but is provided in the unlikely case that a given rule needs more fine-tuning,

`disable` takes precedence over `override`.

#### `threshold`

`threshold` can be passed to the options object to set the popularity threshold for packages. Defaulting to 400,000 downloads per month.

```js
import currentThing from "eslint-config-current-thing";

const config = [
  ...currentThing({
    threshold: 1_000_000,
  }),
];

export default config;
```

This would only include packages that exceed 1,000,000 downloads per month, and thus would constitute a more lenient linting config as less rules will be activated.

### Observability

There are a crazy amount of rules in this config, and they are completely overwhelming. Try easing into them by setting a high `threshold`, and understanding what you are getting into:

- To see the current config standings, checkout [`src/config.js`](./src/config.js)
- To see the full current rule set, checkout:

  - TS [`current-ts.json`](./current-ts.json)
  - JS [`current-js.json`](./current-js.json)
  - Test [`current-test.json`](./current-test.json)
  - TSX [`current-tsx.json`](./current-tsx.json)
  - JSX [`current-jsx.json`](./current-jsx.json)
  - JSON [`current-json.json`](./current-json.json)

### Overwrite Preferences

What is more, you can Enable, Disable, Add or Alter any rule you come across, like so:

```js
import currentThing from "eslint-config-current-thing";

const config = [
  ...currentThing(),
  {
    // Enable/Disable/Alter any set of specific rules
    rules: {
      "functional/no-this-expressions": 2,
    },
  },
];

export default config;
```

---

## Config Methodology - "The Rules"

### 1. Additions

**For a CONFIG to be added, it needs to have around 400,000 monthly downloads (or 4 consecutive weeks above 100,000 weekly downloads).** This is to prevent spam, bloat, needless PRs, and arguments about minutia. But it's also variable as configs change popularity. Yes, it's arbitrary (and it can be spoofed/is [naively calculated](https://blog.npmjs.org/post/92574016600/numeric-precision-matters-how-npm-download-counts-work.html)), but it seems to be a good heuristic for the cutoff between generally used configs and niche configs.

**For a PLUGIN to be added, it needs to be included in an added config, or meet similar config quality standards.** This is to ensure that configs work as intended.

In short, it should be easy for a plugin to get added and stay added, but hard for a config.

To determine if your preferred config is eligible, visit the NPM page and check the weekly download count, or scroll to the bottom to see a list of packages presently under consideration.

You can always extend/disable this config to meet your own needs. However, if you think a config should be included, and it passes the `monthly count test` (and is not garbage/has stars/contributors, etc.), open a PR or Issue, and it will be added. When adding a rule, the "recommended" version of that rule will be unashamedly ~~smashed~~ used with as little alterations as possible.

Outside of getting the various pieces to play nice together, Lint the Current Thing does all it can to _not_ define any new individual rules or to have any opinion. See Conflicts below.

**\[Holding back intensifies]**

### 2. Conflicts

**Conflicting rules favor the preferences of more popular configs via the rules of ESLint flat-config merging.** Adding a bunch of configs will introduce conflicts. But conflicts are now automatically resolved on a config and rule basis, where conflicting rules are disabled (set to `0`) at the conflict config order. This way, they are ideologically in line with the popularity contest. If two conflicting configs switch order, the rules will switch as well. To see the full list of generated conflicts check out [incompatibilities](src/conflicts/incompatibilities.ts). If conflicts can not be resolved this way (i.e. three or more differently named rules which cyclically enforce opposing behavior) then the rules are manually added to the config as known conflicts. It would add insane complexity to fix this automatically to find the less than 5 cases where this actually happens.

### 3. Sub-Categories

**Whatever the leading config is, for any particular thing, that is the config which gets to decide other config's sub-preferences, winner take all, for that particular thing.** ESLint is about linting JavaScript, and many rules and opinions exist around what constitutes "appropriate" use of JS. Many of those opinions not only deal with JavaScript but also deal with auxiliary or tangential systems. Of those tangential systems, where there are conflicts which can not be resolved via merging, the popular winner takes all. For instance, despite being well-supported, very few people use Flow in comparison to TypeScript for typing. Thus, Typescript gets to dominate typing framework and other packages are expected to use their TypeScript-native rules, while Flow is discouraged / unsupported. If Flow suddenly became more popular than TypeScript, this would change. In most cases, opposing frameworks can both be included, like varying style guides (e.g. prettier vs standard vs functional) as neither present fundamentally breaking changes to the other.

### 4. Linting Lag

In the case of the linting ecosystem _strongly favoring against something_ but that thing being an integral part of new, cutting-edge development, new cutting-edge tech will take precedent by **disabling** rules which oppose it. For example, the [semi-recent linting sentiment](https://dev.to/jackshen/stop-using-for-loops-here-s-why-2hp) of "we will never use loops again" being encumbered by the usefulness (and perhaps [need](https://stackoverflow.com/questions/53798589/await-loop-vs-promise-all)) of `for await ... of` loops and AirBnB (a very popular config) still recommending against.

### 5. Abandoned Configs

Considering that linting is such a minor part of coding, often times popular configs will be abandoned and then forked, and the community will continue to use both config versions, and most will have no idea of the split. In such cases (e.g. Comments and Node) the two versions will be grouped together such that their download counts are combined and dependencies are flushed, but only the maintained rules will be added or supported.

If a repository is abandoned due to lack of community interest and has no fork--because no one wants/needs it. It will be removed.

---

## Why is this a bad idea?

1. "Everything popular is wrong" - Oscar Wilde
1. There is a KXCD for this:

   ![KXCD](https://imgs.xkcd.com/comics/standards.png)

1. Somebody will game the system to get a billion weekly downloads.
1. Because NPM naively calculates the download count, once a config makes it into the `current-thing` it will never and can never leave (Until we up the download count minimum or check in nodes modules, etc.)
1. We are moments away from AI linting code way better than ESLint. Mere moments!

## Why is this a good idea?

That said, there are some very compelling reasons to use this config above other configs:

1. Please watch "[**Code is for Humans**](https://frontendmasters.com/teachers/kyle-simpson/code-is-for-humans/)" by Kyle Simpson, author of "[You Don't know JS](https://github.com/getify/You-Dont-Know-JS)". Tying the way that code is written to the way that the most people read it helps ensure that it is accessible for the most humans. A project which adheres to whatever the `current thing` is can be objectively certain that the _most developers in the entire ecosystem_ will be somewhat comfortable approaching it. This makes debugging, contributing, using, understanding, and sharing code easier. No one will be 100% happy with the linting results (what else is new?), but this at least provides some basis to ease developer ramp up time with any particular project or JS code base. Linting React code as React Native code sounds dumb at first, but its really no different from using a superset of React, which is the exact same pattern as Typescript and JS, by putting tighter limits on the code, it makes it more accessible to a wide range of participants.

1. It adds a "higher-authority" or "single source of truth" to config discussions--which is not just someone else's opinion, but aggregate opinion at large, as it spreads across use cases. And as such, it better arbitrates disagreement. Many rules offer links to justification, and it's hard to argue that more learning about JS is bad.

1. Further, it encourages developers to stop making yet more highly opinionated individualized ESLint configs, and instead coalesce around the community configs they like. We love Prettier's stance embracing _opinionated_ configurations, but it does not do well as an example for the ecosystem--if everyone embraces being highly opinionated, everyone loses. If someone truly is willing to die on some linting hill, and wishes that everyone would conform to their demands, they should seek to add those rules to an existing config which this config extends, simply because this config exists, and someone else, somewhere, might also be already using it, and love the new idea. Sure, you could do that with any other config, but what other config is as encompassing and as unopinionated as this? If you go it alone, you may not have any allies, may never get the message out, or worse still, may never have the rude awakening that it's just not a good idea.

1. Custom or extremely granular rules which add value to qualifying configs and are not defined in higher-ranking configs still make it into the `current thing` final config, no matter how obscure. This alters strategies for convincing people about the merits of your new rule. It puts a bid on new rule creation in existing/popular repos, making existing rule sets more robust. In addition to stopping config proliferation, it actually helps build better rules. And more so, it encourages developers behind more popular configs to remain competitive.

1. This config will shift as the opinions in JS Linting shift, just as all human languages shift. All of those shifts in opinion, both outside and in the config will happen on the margin. Non-democratic configs do not listen to this nuance, they take a stance and see if anyone follows. To demonstrate how `current thing` manages this, clone this repo and open up `src/config.js`. Then, alter the `order` of the configs, and you will see how the rules _marginally_ change. It's not just that [software is eating the world](https://a16z.com/2011/08/20/why-software-is-eating-the-world/), it's actually _JavaScript_ software, and we must be cognizant of how everyone is using it in wildly disparate ways as new styles, processes, and technologies rise and old ones fall.

1. Unlike many other configs, this config completely abstracts away the need to add any other `eslint` packages, configs, plugins, and management. It is a pure barbell--absolutely simple in its application, and yet insanely complex and heavy-weight in its implementation.

1. This config can be, and should be, used as an auditing tool. It exposes an eye watering amount of linting problems. I'm not crying. You're crying.

## What is everyone saying?

<img src="./static/andreessen.png" alt="I support the Current Thing" width="800" style=""/>

<img src="./static/altman.png"  alt="I support the Current Thing" width="800" style=""/>

<img src="./static/yglesias.png"  alt="I support the Current Thing" width="800" style=""/>

---

## Great resources that this project draws heavily upon

- [Awesome ESLint](https://github.com/dustinspecker/awesome-eslint)
- [Sheriff ESLint Config](https://www.eslint-config-sheriff.dev/)
- [Eslint-Config-Hardcore](https://www.npmjs.com/package/eslint-config-hardcore)

## Architecture

We're expecting to see an Architecture section, huh?

```mermaid

graph LR
    gen[generate] --> fix[generate:fixables]
    fix --> node_fix[node: get-fixables.ts] ==> lint_fix[lint] --> x[Fixable rules now known]

    fix --> confl[generate:conflicts]
    confl --> node_confl[node: generate-conflicts.ts] --> lint_confl[lint] --> y[Individual configs now generated]

    confl --> incomp[generate:incompatibles]
    incomp --> node_incomp[node: get-incompatibles.ts] --> lint_incomp[lint] --> z[Individual conflicting rules now known]

    incomp --> confs[generate:configs]
    confs --> gen_conf[generate:config] --> node_gen_conf[node: generate-config.ts] --> node_npm_q[NPM queried for counts] --> lint_conf[lint] --> a[Final configuration now generated]
    confs --> gen_curr[generate:currents] --> curr_all[all currents]
    curr_all --> curr_ts[current:ts]
    curr_all --> curr_js[current:js]
    curr_all --> curr_test[current:test]
    curr_all --> curr_tsx[current:tsx]
    curr_all --> curr_jsx[current:jsx]
    curr_all --> curr_jsx[current:md]
    curr_all --> curr_jsx[current:yml]
    curr_all --> curr_jsx[current:json]
    curr_all --> lint_curr[lint] --> b[All JSON configs now generated]

    confs --> readme[generate:readme]
    readme --> node_readme[node: generate-readme.ts] --> node_npm_s[NPM searched for all configs] --> c[Current state of all config rankings now known]

```

## We will not be adding these configs

See [rejected](./src/packages/rejected.ts) for the full list with notes. But it's always open for debate!

## We are considering adding these configs

<!-- Start Generated Under Consideration List DO NOT EDIT! -->

The following section is generated according to spec.

Generated on 4/19/2024, downloads for the previous 28 days.

- 777,063 downloads, [toml-eslint-parser](https://www.npmjs.com/package/toml-eslint-parser)
- 768,108 downloads, [eslint-plugin-formatjs](https://www.npmjs.com/package/eslint-plugin-formatjs)
- 636,845 downloads, [eslint-plugin-no-relative-import-paths](https://www.npmjs.com/package/eslint-plugin-no-relative-import-paths)
- 442,562 downloads, [@wordpress/eslint-plugin](https://www.npmjs.com/package/@wordpress/eslint-plugin)
- 435,156 downloads, [eslint-plugin-qunit](https://www.npmjs.com/package/eslint-plugin-qunit)
- 410,878 downloads, [eslint-config-xo-space](https://www.npmjs.com/package/eslint-config-xo-space)
- 397,863 downloads, [eslint-config-xo-typescript](https://www.npmjs.com/package/eslint-config-xo-typescript) - Not Yet Eligible
- 378,422 downloads, [eslint-plugin-fp](https://www.npmjs.com/package/eslint-plugin-fp) - Not Yet Eligible
- 371,103 downloads, [eslint-plugin-import-helpers](https://www.npmjs.com/package/eslint-plugin-import-helpers) - Not Yet Eligible
- 364,594 downloads, [@lwc/eslint-plugin-lwc](https://www.npmjs.com/package/@lwc/eslint-plugin-lwc) - Not Yet Eligible
- 361,446 downloads, [eslint-plugin-antfu](https://www.npmjs.com/package/eslint-plugin-antfu) - Not Yet Eligible
- 359,468 downloads, [eslint-plugin-ssr-friendly](https://www.npmjs.com/package/eslint-plugin-ssr-friendly) - Not Yet Eligible
- 356,355 downloads, [eslint-plugin-github](https://www.npmjs.com/package/eslint-plugin-github) - Not Yet Eligible
- 350,500 downloads, [eslint-config-semistandard](https://www.npmjs.com/package/eslint-config-semistandard) - Not Yet Eligible
- 349,280 downloads, [eslint-plugin-i18n-text](https://www.npmjs.com/package/eslint-plugin-i18n-text) - Not Yet Eligible
- 339,141 downloads, [eslint-plugin-react-native-a11y](https://www.npmjs.com/package/eslint-plugin-react-native-a11y) - Not Yet Eligible
- 338,795 downloads, [@salesforce/eslint-config-lwc](https://www.npmjs.com/package/@salesforce/eslint-config-lwc) - Not Yet Eligible
- 321,566 downloads, [@antfu/eslint-config](https://www.npmjs.com/package/@antfu/eslint-config) - Not Yet Eligible
- 319,617 downloads, [eslint-plugin-testcafe](https://www.npmjs.com/package/eslint-plugin-testcafe) - Not Yet Eligible
- 297,572 downloads, [eslint-plugin-deprecate](https://www.npmjs.com/package/eslint-plugin-deprecate) - Not Yet Eligible
- 295,029 downloads, [eslint-plugin-lit](https://www.npmjs.com/package/eslint-plugin-lit) - Not Yet Eligible
- 292,774 downloads, [@ngrx/eslint-plugin](https://www.npmjs.com/package/@ngrx/eslint-plugin) - Not Yet Eligible
- 282,683 downloads, [eslint-config-universe](https://www.npmjs.com/package/eslint-config-universe) - Not Yet Eligible
- 280,719 downloads, [eslint-plugin-array-func](https://www.npmjs.com/package/eslint-plugin-array-func) - Not Yet Eligible
- 280,009 downloads, [@rushstack/eslint-config](https://www.npmjs.com/package/@rushstack/eslint-config) - Not Yet Eligible
- 278,957 downloads, [eslint-plugin-import-newlines](https://www.npmjs.com/package/eslint-plugin-import-newlines) - Not Yet Eligible
- 276,757 downloads, [eslint-plugin-no-secrets](https://www.npmjs.com/package/eslint-plugin-no-secrets) - Not Yet Eligible
- 272,731 downloads, [@salesforce/eslint-plugin-lightning](https://www.npmjs.com/package/@salesforce/eslint-plugin-lightning) - Not Yet Eligible
- 263,143 downloads, [eslint-plugin-minecraft-linting](https://www.npmjs.com/package/eslint-plugin-minecraft-linting) - Not Yet Eligible
- 257,683 downloads, [eslint-config-oclif-typescript](https://www.npmjs.com/package/eslint-config-oclif-typescript) - Not Yet Eligible
- 250,835 downloads, [eslint-plugin-astro](https://www.npmjs.com/package/eslint-plugin-astro) - Not Yet Eligible
- 245,452 downloads, [eslint-plugin-regex](https://www.npmjs.com/package/eslint-plugin-regex) - Not Yet Eligible
- 243,436 downloads, [@sap/eslint-plugin-cds](https://www.npmjs.com/package/@sap/eslint-plugin-cds) - Not Yet Eligible
- 242,052 downloads, [eslint-plugin-chai-expect](https://www.npmjs.com/package/eslint-plugin-chai-expect) - Not Yet Eligible
- 237,028 downloads, [eslint-plugin-json-format](https://www.npmjs.com/package/eslint-plugin-json-format) - Not Yet Eligible
- 231,030 downloads, [eslint-plugin-canonical](https://www.npmjs.com/package/eslint-plugin-canonical) - Not Yet Eligible
- 227,139 downloads, [eslint-config-esnext](https://www.npmjs.com/package/eslint-config-esnext) - Not Yet Eligible
- 220,459 downloads, [eslint-config-airbnb-typescript-prettier](https://www.npmjs.com/package/eslint-config-airbnb-typescript-prettier) - Not Yet Eligible
- 218,266 downloads, [eslint-plugin-spellcheck](https://www.npmjs.com/package/eslint-plugin-spellcheck) - Not Yet Eligible
- 217,320 downloads, [eslint-plugin-etc](https://www.npmjs.com/package/eslint-plugin-etc) - Not Yet Eligible

<!-- End Generated Under Consideration List DO NOT EDIT! -->
