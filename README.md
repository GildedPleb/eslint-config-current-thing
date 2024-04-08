# Lint The Current Thing

<img src="./static/current_thing.jpg" alt="I support the Current Thing" width="200" style=""/>

An **extremely unopinionated** config based on a popularity contest between the most downloaded ESLint configs/plugins/parsers/rules.

> _"Finally, we have a config we all equally hate!"_

---

Linting can be so opinionated, it can become political. `Eslint Config Current Thing` generates an ESLint config objectively based on whatever the current thing is at the time of build w/r/t broad ecosystem-wide definitions and opinion around JavaScript linting. Now, those political preferences can be exposed for what they are--power-grabs--by competing on an inter-ecosystem, distributed scale, not just within a set of contributors or a niche!

## Technical explainer

This is a meta-config of many configs. The basic idea is that Linting is usually incrementally added in and teams have no reason or time to sit down like AirBnB and justify and debate every last ESLint rule, but they do all sit down and figure something out. Over time, hundreds of eslint plugins and configurations have emerged with various levels of popularity and maintenance, but they usually only address the small set of things that the team who developed them needed to address and invariably miss something--this is complicated by the fact that NPM does not make searching for ESLint configs/plugins easy. Then, the JS ecosystem moves to the next framework, the config goes out of maintenance and rules become irrelevant/bad and everybody has to solve the same problems again (welcome to FOSS!). Lint The Current Thing essentially grabs as many rules as possible, indiscriminately, provided they meet minimum thresholds of quality, and compares each rule on a popularity contest, so whatever the Current Thing is (provided you update your packages) that will fundamentally be tied to ecosystem-wide best practices as supported by the most people--this is to say Lint The Current Thing produces code that is accessible to the widest possible set of developers and stays in-step with the ecosystem. You can read more in the "Why is this a good idea" section.

Presently, it combines these configs (and their plugins, submodules, etc.):

|                 |                       |                |               |                                 |
| --------------- | --------------------- | -------------- | ------------- | ------------------------------- |
| AirBnB          | Babel                 | Comments       | Compat        | Create React App (Now Ejected!) |
| CSS Modules     | Emotion               | ES/ES-X        | ESLint        | Flowtype                        |
| Functional      | Google                | Header         | i18next       | Import                          |
| Import-sort     | Jest                  | JSDoc          | JSX A11y      | NextJS                          |
| Node            | No-Only-Tests         | No-unsanitized | Perfectionist | Prettier                        |
| Promises        | React                 | React Hooks    | React Native  | React Perf                      |
| React-Refresh   | Regexp                | Security       | Shopify       | SonarJS                         |
| Sort Classes    | Standard              | Storybook      | Stylistic     | Tailwind                        |
| Testing-Library | TSDoc                 | Typescript     | Unicorn       | Unused-Imports                  |
| XO              | You Don't Need Lodash | Cypress        | Class Sort    |                                 |

The winning (and thus supported) high-level architecture is:

| Types        | FrontEnd                 | Testing |
| ------------ | ------------------------ | ------- |
| `Typescript` | `React` / `React Native` | `Jest`  |

Meaning, in many cases, using this config without these frameworks (by disabling them) or with competing frameworks, probably means you are gunna have a bad time.

---

<!-- Generated do not edit! -->

Unsurprisingly, it is incredibly strict with popularity-based opinions on 1134 typescript rules, 1033 javascript rules, and 1116 testing rules.

<!-- End Generated do not edit! -->

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

export default [...currentThing()];
```

You'll also probably want something like this in your `package.json` (edit accordingly):

```json
  ...
  "type": "module",
  "prettier": {},
  "engines": {
    "node": ">=20.0.0"
  },
  "browserslist": [
    "defaults and supports es6-module",
    "maintained node versions"
  ],
  ...
```

And if you are using VS Code, you should get the extension for ESLint `dbaeumer.vscode-eslint` where you will need to add this to your `settings.json`:

```json
{
  ...
  "eslint.experimental.useFlatConfig": true
  ...
}
```

And you'll probably want to restart your ESLint server, maybe more than once. `Command Pallet` > `Restart ESLint Server`

Oh god, what have we done.

---

## Usage

```js
import currentThing from "eslint-config-current-thing";

export default [
  // Rules here will be overridden by the current thing, if they collide
  ...currentThing(),
  // Rules here will override the current thing, if they collide
];
```

### Options

Presently, there are three options: `disable`, `override`, and `threshold`.

For `disable` and `override` a few configs will have internal configs or overrides, for instance `shopify` has a config for `esnext`, `react`, and others. These can be targeted via adding a secondary namespace, ie, `@shopify/eslint-plugin/jest` (all lowercase, but look up in the source def for exact targets).

#### `disable`

To disable the entirety of a particular config, that config must be named via its package name, like so:

```js
import currentThing from "eslint-config-current-thing";

export default [...currentThing({ disable: ["eslint-config-import"] })];
```

**WARNING: `disable` may have unintended consequences as various configs are interdependent** (To-do: This need not be so, but fixing it is very annoying).

#### `override`

In the event that you need to override or change a rule in order with respect to all other rules:

```js
export default [
  ...currentThing({
    override: { "eslint-config-airbnb": { "no-restricted-syntax": 2 } },
  }),
];
```

`override` will not clear existing rules but is provided in the unlikely case that a given rule needs more fine-tuning; we just don't have the bandwidth to test a thousand rules against each other.

`disable` takes precedence over `override`.

#### `threshold`

`threshold` can be passed to the options object to set the popularity threshold for packages. Defaulting to 400,000 downloads per month.

```js
export default [
  ...currentThing({
    threshold: 1_000_000,
  }),
];
```

This would only include packages that exceed 1,000,000 downloads per month, and thus would constitute a more lenient linting config as less rules will be activated.

### Choke Out Problems

There are a crazy amount of rules in this config, and they are completely overwhelming.

1. Try easing into them by setting a high `threshold`.
1. Importantly, the config is also exported as a plain JS object called `JSONConfig`. As such, you can pick off rules to disable in `eslint.config.js`, like below, and choke out the problems in your code by slowly allowing more rules in:

```js
import currentThing, { JSONConfig } from "eslint-config-current-thing";

export default [
  ...currentThing(),
  {
    // Disable all but the first 10 rules
    rules: Object.fromEntries(
      Object.entries(JSONConfig.rules).map(([rule, state], i) => [
        rule,
        i > 10 ? 0 : state,
      ]),
    ),
  },
];
```

### Overwrite Preferences

What is more, you can Enable, Disable, Add or Alter any rule you come across, like so:

```js
export default [
  ...currentThing(),
  {
    // Enable/Disable/Alter any set of specific rules
    rules: {
      "functional/no-this-expressions": 2,
    },
  },
];
```

---

## Config Methodology - "The Rules"

- To see the current config standings, checkout [`src/config.js`](./src/config.js)
- To see the full current rule set, checkout:
  - TS [`current-ts.json`](./current-ts.json)
  - JS [`current-js.json`](./current-js.json)
  - Test [`current-test.json`](./current-test.json)
  - TSX [`current-test.json`](./current-tsx.json)
  - TSX [`current-test.json`](./current-jsx.json)

### 1. Additions

**For a CONFIG to be added, it needs to have around 400,000 monthly downloads (or 4 consecutive weeks above 100,000 weekly downloads).** This is to prevent spam, bloat, needless PRs, and arguments about minutia. But it's also variable as configs change popularity. Yes, it's arbitrary (and it can be spoofed/is [naively calculated](https://blog.npmjs.org/post/92574016600/numeric-precision-matters-how-npm-download-counts-work.html)), but it seems to be a good heuristic for the cutoff between generally used configs and niche configs.

**For a PLUGIN to be added, it needs to be included in an added config, or meet similar config quality standards.** This is to ensure that configs work as intended.

In short, it should be easy for a plugin to get added and stay added, but hard for a config.

To determine if your preferred config is eligible, visit the NPM page and check the weekly download count, or scroll to the bottom to see a list of packages presently under consideration.

You can always extend/disable this config to meet your own needs. However, if you think a config should be included, and it passes the `monthly count test` (and is not garbage/has stars/contributors, etc.), open a PR or Issue, and it will be added. When adding a rule, the `recommended` version of that rule will be unashamedly used with as little alterations as possible (however, if it has serious conflicts with higher priority rules we will find workarounds, e.g. even "lite" FP rules break everything popular).

Outside of getting the various pieces to play nice together, this repo does all it can to _not_ define any new individual rules or to have any opinion. **[Holding back intensifies]**

### 2. Conflicts

**Conflicting rules favor the preferences of more popular configs via the rules of ESLint flat-config merging.** Or, if conflicts can not be resolved this way (i.e. two differently named rules which enforce opposing behavior) then the manual disabling of the lower, conflicting rule is used, or that rule is not added. However, in some cases, an [intolerant minority](https://nassimtaleb.org/2016/08/intolerant-wins-dictatorship-small-minority/) rule-set will disable rules from a more used package (e.g. TSDoc, with fewer users, only has 1 rule, turning off that rule means the package is useless, yet, that one rule conflicts with many rules in the widely used JSDoc/recommended config. As long as we are using Typescript, rules in JSDoc are turned off to accommodate TSDoc.)

### 3. Sub-Categories

**Whatever the leading config is, for any particular thing, that is the config which gets to decide other config's sub-preferences, winner take all, for that particular thing.** ESLint is about linting JavaScript, and many rules and opinions exist around what constitutes "appropriate" use of JS. Many of those opinions not only deal with JavaScript but also deal with auxiliary or tangential systems. Of those tangential systems, where there are conflicts which can not be resolved via merging, the popular winner takes all. For instance, despite being well-supported, very few people use Flow in comparison to TypeScript for typing. Thus, Typescript gets to dominate typing framework and other packages are expected to use their TypeScript-native rules, while Flow is discouraged / unsupported. If Flow suddenly became more popular than TypeScript, this would change. In most cases, opposing frameworks can both be included, like varying style guides (e.g. prettier vs standard vs functional) as neither present breaking changes to the other.

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
1. We are moments away from AI linting code way better than ESLint.

## Why is this a good idea?

That said, there are some very compelling reasons to use this config above other configs:

1. Please watch "[**Code is for Humans**](https://frontendmasters.com/teachers/kyle-simpson/code-is-for-humans/)" by Kyle Simpson, author of "[You Don't know JS](https://github.com/getify/You-Dont-Know-JS)". Tying the way that code is written to the way that the most people read it helps ensure that it is accessible for the most humans. A project which adheres to whatever the `current thing` is can be objectively certain that the _most developers in the entire ecosystem_ will be somewhat comfortable approaching it. This makes debugging, contributing, using, understanding, and sharing code easier. No one will be 100% happy with the linting results (what else is new?), but this at least provides some basis to ease developer ramp up time with any particular project or JS code base. Linting React code as React Native code sounds dumb at first, but its really no different from using a superset of React, which is the exact same pattern as Typescript and JS, by putting tighter limits on the code, it makes it more reusable.

1. It adds a "higher-authority" or "single source of truth" to config discussions--which is not just someone else's opinion, but aggregate opinion at large, as it spreads across use cases. And as such, it better arbitrates disagreement. Many rules offer links to justification, and it's hard to argue that more learning about JS is bad.

1. Further, it encourages developers to stop making yet more highly opinionated individualized ESLint configs, and instead coalesce around the community configs they like. We love Prettier's stance embracing _opinionated_ configurations, but it does not do well as an example for the ecosystem--if everyone embraces being highly opinionated, everyone loses. If someone truly is willing to die on some linting hill, and wishes that everyone would conform to their demands, they should seek to add those rules to an existing config which this config extends, simply because this config exists, and someone else, somewhere, might also be already using it, and love the new idea. Sure, you could do that with any other config, but what other config is as encompassing and as unopinionated as this? If you go it alone, you may not have any allies, may never get the message out, or worse still, may never have the rude awakening that it's just not a good idea.

1. Custom or extremely granular rules which add value to qualifying configs and are not defined in higher-ranking configs still make it into the `current thing` final config, no matter how obscure. This alters strategies for convincing people about the merits of your new rule. It puts a bid on new rule creation in existing/popular repos, making existing rule sets more robust. In addition to stopping config proliferation, it actually helps build better rules. And more so, it encourages developers behind more popular configs to remain competitive.

1. This config will shift as the opinions in JS Linting shift, just as all human languages shift. All of those shifts in opinion, both outside and in the config will happen on the margin. Non-democratic configs do not listen to this nuance, they take a stance and see if anyone follows. To demonstrate how `current thing` manages this, clone this repo and open up `src/config.js`. Then, alter the `order` of the configs, and you will see how the rules _marginally_ change. It's not just that [software is eating the world](https://a16z.com/2011/08/20/why-software-is-eating-the-world/), it's actually _JavaScript_ software, and we must be cognizant of how everyone is using it in wildly disparate ways as new styles, processes, and technologies rise.

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

## We will not be adding these configs

See [rejected](./src/rejected.ts) and [not-applicable](./src/not-applicable.ts) for the full list. But it's always open for debate!

<!-- DO NOT EDIT below this line, fully generated -->

## We are considering adding these configs

The following section is generated according to spec.

Generated on 4/8/2024, downloads for the previous 28 days.

- 5,771,207 downloads, [jsonc-eslint-parser](https://www.npmjs.com/package/jsonc-eslint-parser)
- 3,978,368 downloads, [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha)
- 3,574,629 downloads, [eslint-import-resolver-alias](https://www.npmjs.com/package/eslint-import-resolver-alias)
- 3,513,208 downloads, [eslint-plugin-playwright](https://www.npmjs.com/package/eslint-plugin-playwright)
- 3,506,687 downloads, [eslint-plugin-prefer-arrow](https://www.npmjs.com/package/eslint-plugin-prefer-arrow)
- 2,551,899 downloads, [yaml-eslint-parser](https://www.npmjs.com/package/yaml-eslint-parser)
- 1,989,051 downloads, [eslint-plugin-json](https://www.npmjs.com/package/eslint-plugin-json)
- 1,952,180 downloads, [eslint-plugin-markdown](https://www.npmjs.com/package/eslint-plugin-markdown)
- 1,884,054 downloads, [@graphql-eslint/eslint-plugin](https://www.npmjs.com/package/@graphql-eslint/eslint-plugin)
- 1,862,420 downloads, [eslint-plugin-html](https://www.npmjs.com/package/eslint-plugin-html)
- 1,676,975 downloads, [eslint-plugin-lodash](https://www.npmjs.com/package/eslint-plugin-lodash)
- 1,289,747 downloads, [eslint-plugin-jsonc](https://www.npmjs.com/package/eslint-plugin-jsonc)
- 1,271,157 downloads, [@microsoft/eslint-plugin-sdl](https://www.npmjs.com/package/@microsoft/eslint-plugin-sdl)
- 1,267,562 downloads, [eslint-plugin-yml](https://www.npmjs.com/package/eslint-plugin-yml)
- 1,203,244 downloads, [eslint-plugin-typescript-sort-keys](https://www.npmjs.com/package/eslint-plugin-typescript-sort-keys)
- 1,113,480 downloads, [eslint-plugin-chai-friendly](https://www.npmjs.com/package/eslint-plugin-chai-friendly)
- 996,919 downloads, [eslint-plugin-sort-keys-fix](https://www.npmjs.com/package/eslint-plugin-sort-keys-fix)
- 974,957 downloads, [eslint-plugin-graphql](https://www.npmjs.com/package/eslint-plugin-graphql)
- 862,454 downloads, [eslint-plugin-rxjs](https://www.npmjs.com/package/eslint-plugin-rxjs)
- 842,640 downloads, [eslint-plugin-mdx](https://www.npmjs.com/package/eslint-plugin-mdx)
- 789,933 downloads, [eslint-plugin-jasmine](https://www.npmjs.com/package/eslint-plugin-jasmine)
- 682,845 downloads, [eslint-plugin-check-file](https://www.npmjs.com/package/eslint-plugin-check-file)
- 680,104 downloads, [npm-package-json-lint](https://www.npmjs.com/package/npm-package-json-lint)
- 671,221 downloads, [eslint-import-resolver-custom-alias](https://www.npmjs.com/package/eslint-import-resolver-custom-alias)
- 548,290 downloads, [@types/eslint-plugin-prettier](https://www.npmjs.com/package/@types/eslint-plugin-prettier)
- 538,057 downloads, [eslint-plugin-ava](https://www.npmjs.com/package/eslint-plugin-ava)
- 523,940 downloads, [ember-template-lint](https://www.npmjs.com/package/ember-template-lint)
- 505,761 downloads, [eslint-plugin-react-prefer-function-component](https://www.npmjs.com/package/eslint-plugin-react-prefer-function-component)
- 500,025 downloads, [eslint-formatter-gitlab](https://www.npmjs.com/package/eslint-formatter-gitlab)
- 463,120 downloads, [@wordpress/eslint-plugin](https://www.npmjs.com/package/@wordpress/eslint-plugin)
- 448,077 downloads, [eslint-plugin-no-use-extend-native](https://www.npmjs.com/package/eslint-plugin-no-use-extend-native)
- 427,008 downloads, [eslint-config-xo-space](https://www.npmjs.com/package/eslint-config-xo-space)
- 405,401 downloads, [eslint-plugin-local](https://www.npmjs.com/package/eslint-plugin-local)
- 394,615 downloads, [eslint-plugin-qunit](https://www.npmjs.com/package/eslint-plugin-qunit) - Not Yet Eligible
- 380,819 downloads, [eslint-plugin-ssr-friendly](https://www.npmjs.com/package/eslint-plugin-ssr-friendly) - Not Yet Eligible
- 379,003 downloads, [@lwc/eslint-plugin-lwc](https://www.npmjs.com/package/@lwc/eslint-plugin-lwc) - Not Yet Eligible
- 376,648 downloads, [eslint-config-xo-typescript](https://www.npmjs.com/package/eslint-config-xo-typescript) - Not Yet Eligible
- 372,474 downloads, [eslint-plugin-fp](https://www.npmjs.com/package/eslint-plugin-fp) - Not Yet Eligible
- 372,365 downloads, [eslint-config-semistandard](https://www.npmjs.com/package/eslint-config-semistandard) - Not Yet Eligible
- 368,410 downloads, [json-fixer](https://www.npmjs.com/package/json-fixer) - Not Yet Eligible
