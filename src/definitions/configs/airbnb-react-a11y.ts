// PathMark: ./src/definitions/configs/airbnb-react-a11y.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: [...jsxFiles, ...tsxFiles],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    ${RULES}
  }`,
  ejected: true,
  enabled: true,
  id: "airbnb",
  name: "AirBnb",
  nameSecondary: "React-A11y",
  packages: [
    {
      declaredAs: "airbnbReactA11y",
      package: "eslint-config-airbnb",
      requiresImport: false,
      subModule: "/rules/react-a11y",
    },
  ],
  requiredPlugins: ["jsx-a11y", "react"],
  rules: `"jsx-a11y/accessible-emoji": 0,
    "jsx-a11y/alt-text": [
      2,
      {
        area: [],
        elements: ["img", "object", "area", 'input[type="image"]'],
        img: [],
        'input[type="image"]': [],
        object: [],
      },
    ],
    "jsx-a11y/anchor-ambiguous-text": 0,
    "jsx-a11y/anchor-has-content": [2, { components: [] }],
    "jsx-a11y/anchor-is-valid": [
      2,
      {
        aspects: ["noHref", "invalidHref", "preferButton"],
        components: ["Link"],
        specialLink: ["to"],
      },
    ],
    "jsx-a11y/aria-activedescendant-has-tabindex": 2,
    "jsx-a11y/aria-props": 2,
    "jsx-a11y/aria-proptypes": 2,
    "jsx-a11y/aria-role": [2, { ignoreNonDOM: false }],
    "jsx-a11y/aria-unsupported-elements": 2,
    "jsx-a11y/autocomplete-valid": [
      0,
      {
        inputComponents: [],
      },
    ],
    "jsx-a11y/click-events-have-key-events": 2,
    "jsx-a11y/control-has-associated-label": [
      2,
      {
        controlComponents: [],
        depth: 5,
        ignoreElements: [
          "audio",
          "canvas",
          "embed",
          "input",
          "textarea",
          "tr",
          "video",
        ],
        ignoreRoles: [
          "grid",
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "row",
          "tablist",
          "toolbar",
          "tree",
          "treegrid",
        ],
        labelAttributes: ["label"],
      },
    ],
    "jsx-a11y/heading-has-content": [2, { components: [""] }],
    "jsx-a11y/html-has-lang": 2,
    "jsx-a11y/iframe-has-title": 2,
    "jsx-a11y/img-redundant-alt": 2,
    "jsx-a11y/interactive-supports-focus": 2,
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        assert: "both",
        controlComponents: [],
        depth: 25,
        labelAttributes: [],
        labelComponents: [],
      },
    ],
    "jsx-a11y/label-has-for": [
      0,
      {
        allowChildren: false,
        components: [],
        required: {
          every: ["nesting", "id"],
        },
      },
    ],
    "jsx-a11y/lang": 2,
    "jsx-a11y/media-has-caption": [
      2,
      {
        audio: [],
        track: [],
        video: [],
      },
    ],
    "jsx-a11y/mouse-events-have-key-events": 2,
    "jsx-a11y/no-access-key": 2,
    "jsx-a11y/no-aria-hidden-on-focusable": 0,
    "jsx-a11y/no-autofocus": [2, { ignoreNonDOM: true }],
    "jsx-a11y/no-distracting-elements": [
      2,
      {
        elements: ["marquee", "blink"],
      },
    ],
    "jsx-a11y/no-interactive-element-to-noninteractive-role": [
      2,
      {
        tr: ["none", "presentation"],
      },
    ],
    "jsx-a11y/no-noninteractive-element-interactions": [
      2,
      {
        handlers: [
          "onClick",
          "onMouseDown",
          "onMouseUp",
          "onKeyPress",
          "onKeyDown",
          "onKeyUp",
        ],
      },
    ],
    "jsx-a11y/no-noninteractive-element-to-interactive-role": [
      2,
      {
        li: ["menuitem", "option", "row", "tab", "treeitem"],
        ol: [
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "tablist",
          "tree",
          "treegrid",
        ],
        table: ["grid"],
        td: ["gridcell"],
        ul: [
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "tablist",
          "tree",
          "treegrid",
        ],
      },
    ],
    "jsx-a11y/no-noninteractive-tabindex": [
      2,
      {
        allowExpressionValues: true,
        roles: ["tabpanel"],
        tags: [],
      },
    ],
    "jsx-a11y/no-onchange": 0,
    "jsx-a11y/no-redundant-roles": [
      2,
      {
        nav: ["navigation"],
      },
    ],
    "jsx-a11y/no-static-element-interactions": [
      2,
      {
        handlers: [
          "onClick",
          "onMouseDown",
          "onMouseUp",
          "onKeyPress",
          "onKeyDown",
          "onKeyUp",
        ],
      },
    ],
    "jsx-a11y/prefer-tag-over-role": 0,
    "jsx-a11y/role-has-required-aria-props": 2,
    "jsx-a11y/role-supports-aria-props": 2,
    "jsx-a11y/scope": 2,
    "jsx-a11y/tabindex-no-positive": 2,`,
} satisfies Config;
// EOF
