# Lint The Current Thing

<img src="./static/current_thing.jpg" alt="I support the Current Thing" width="200" style=""/>

An **extremely unopinionated** config based on a popularity contest between the most downloaded ESLint configs/plugins/parsers/rules.

> _"Finally, we have a config we all equally hate!"_

---

Linting can be so opinionated, it can become political. `Eslint Config Current Thing` generates an ESLint config objectively based on whatever the current thing is at the time of build w/r/t broad ecosystem-wide definitions and opinion around JavaScript linting. Now, those political preferences can be exposed for what they are--power-grabs--by competing on an inter-ecosystem, distributed scale, not just within a set of contributors or a niche.

Presently, it combines these configs (and their plugins, sub-modules, etc.):

|                |          |            |             |                  |
| -------------- | -------- | ---------- | ----------- | ---------------- |
| AirBnB         | Babel    | Comments   | Compat      | Create React App |
| ESLint         | Flowtype | Functional | Google      | Import-sort      |
| Import         | Jest     | JSDoc      | JSX A11y    | NextJS           |
| Node           | Prettier | Promises   | React Hooks | React Native     |
| React Perf     | React    | Security   | Shopify     | SonarJS          |
| Sort Classes   | Standard | TSDoc      | Typescript  | Unicorn          |
| You Don't Need | XO       |

The winning (and thus supported) high-level architecture is:
| Types | FrontEnd | Testing |
| ----- | -------- | ------- |
|`Typescript` | `React` / `React Native`| `Jest`

---

Unsurprisingly, it is incredibly strict with around 1000 rules.

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
    "node": ">=18.0.0"
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

Presently, there are two options: `disable` and `override`.

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

### Choke Out Problems

There are around 1000 rules in this config, and they are completely overwhelming.

1. Try easing into them with [nibble](https://github.com/IanVS/eslint-nibble) (though, we have no idea if it works with flat config).
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
      ])
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
- To see the full current rule set, checkout [`current.json`](./current.json)

### 1. Additions

**For a plugin/config/rule-set to be added, it needs to have more than 400,000 monthly downloads (or 4 consecutive weeks above 100,000 weekly downloads).** This is to prevent spam, bloat, needless PRs, and arguments about minutia. Yes, it's arbitrary (and it can be spoofed/is [naively calculated](https://blog.npmjs.org/post/92574016600/numeric-precision-matters-how-npm-download-counts-work.html)), but it seems to be a good heuristic for the cutoff between generally used configs and niche configs.

To determine if your preferred config is eligible, visit the NPM page and check the weekly download count.

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

## What is everyone saying?

<img src="./static/andreessen.png" alt="I support the Current Thing" width="800" style=""/>

<img src="./static/altman.png"  alt="I support the Current Thing" width="800" style=""/>

<img src="./static/yglesias.png"  alt="I support the Current Thing" width="800" style=""/>

---

## Great resources that this project draws heavily upon

- [Awesome ESLint](https://github.com/dustinspecker/awesome-eslint)
- [Sheriff ESLint Config](https://sheriffrc.gitbook.io/sheriff/)

## We are considering adding these configs

- https://www.npmjs.com/package/eslint-plugin-html : JS in HTML
- https://www.npmjs.com/package/eslint-plugin-json : JSON
- https://www.npmjs.com/package/eslint-plugin-markdown : JS in Markdown
- https://www.npmjs.com/package/eslint-plugin-yml : YAML
- https://www.npmjs.com/package/@graphql-eslint/eslint-plugin : GraphGL
- https://www.npmjs.com/package/eslint-plugin-storybook : Storybook

## We will not be adding these configs

- https://www.npmjs.com/package/eslint-plugin-unused-imports : Obsoleted by Typescript
- https://www.npmjs.com/package/eslint-plugin-prefer-arrow : Seems a little too obscure / narrow
- https://www.npmjs.com/package/eslint-plugin-filenames : Obsoleted by Unicorn
- https://www.npmjs.com/package/eslint-plugin-react-native-globals : Obsoleted by React Native
- https://www.npmjs.com/package/@react-native-community/eslint-plugin : Included with @react-native-community/eslint-config
- https://www.npmjs.com/package/eslint-plugin-deprecation : Obsoleted by SonarJS
