/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions {}
  }
}

export interface RuleOptions {
  /**
   * Disallow `children` in void DOM elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children
   */
  'react-dom/no-children-in-void-dom-elements'?: Linter.RuleEntry<[]>
  /**
   * Disallow `dangerouslySetInnerHTML`.
   * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml
   */
  'react-dom/no-dangerously-set-innerhtml'?: Linter.RuleEntry<[]>
  /**
   * Disallow `dangerouslySetInnerHTML` and `children` at the same time.
   * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children
   */
  'react-dom/no-dangerously-set-innerhtml-with-children'?: Linter.RuleEntry<[]>
  /**
   * Disallow `findDOMNode`.
   * @see https://eslint-react.xyz/docs/rules/dom-no-find-dom-node
   */
  'react-dom/no-find-dom-node'?: Linter.RuleEntry<[]>
  /**
   * Disallow `flushSync`.
   * @see https://eslint-react.xyz/docs/rules/dom-no-flush-sync
   */
  'react-dom/no-flush-sync'?: Linter.RuleEntry<[]>
  /**
   * Replaces usages of `ReactDom.hydrate()` with `hydrateRoot()`.
   * @see https://eslint-react.xyz/docs/rules/dom-no-hydrate
   */
  'react-dom/no-hydrate'?: Linter.RuleEntry<[]>
  /**
   * Enforces explicit `type` attribute for `button` elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-missing-button-type
   */
  'react-dom/no-missing-button-type'?: Linter.RuleEntry<[]>
  /**
   * Enforces explicit `sandbox` attribute for `iframe` elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox
   */
  'react-dom/no-missing-iframe-sandbox'?: Linter.RuleEntry<[]>
  /**
   * Enforces the absence of a `namespace` in React elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-namespace
   */
  'react-dom/no-namespace'?: Linter.RuleEntry<[]>
  /**
   * Replaces usages of `ReactDom.render()` with `createRoot(node).render()`.
   * @see https://eslint-react.xyz/docs/rules/dom-no-render
   */
  'react-dom/no-render'?: Linter.RuleEntry<[]>
  /**
   * Disallow the return value of `ReactDOM.render`.
   * @see https://eslint-react.xyz/docs/rules/dom-no-render-return-value
   */
  'react-dom/no-render-return-value'?: Linter.RuleEntry<[]>
  /**
   * Disallow `javascript:` URLs as attribute values.
   * @see https://eslint-react.xyz/docs/rules/dom-no-script-url
   */
  'react-dom/no-script-url'?: Linter.RuleEntry<[]>
  /**
   * Disallow unknown `DOM` property.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unknown-property
   */
  'react-dom/no-unknown-property'?: Linter.RuleEntry<ReactDomNoUnknownProperty>
  /**
   * Enforces `sandbox` attribute for `iframe` elements is not set to unsafe combinations.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-iframe-sandbox
   */
  'react-dom/no-unsafe-iframe-sandbox'?: Linter.RuleEntry<[]>
  /**
   * Disallow `target="_blank"` without `rel="noreferrer noopener"`.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank
   */
  'react-dom/no-unsafe-target-blank'?: Linter.RuleEntry<[]>
  /**
   * Replaces usages of `useFormState` with `useActionState`.
   * @see https://eslint-react.xyz/docs/rules/dom-no-use-form-state
   */
  'react-dom/no-use-form-state'?: Linter.RuleEntry<[]>
  /**
   * Disallow `children` in void DOM elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children
   */
  'react-dom/no-void-elements-with-children'?: Linter.RuleEntry<[]>
  /**
   * Enforces that a function with the `use` prefix should use at least one Hook inside of it.
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-prefix
   */
  'react-hooks-extra/ensure-custom-hooks-using-other-hooks'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary usage of `useCallback`.
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-callback
   */
  'react-hooks-extra/ensure-use-callback-has-non-empty-deps'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary usage of `useMemo`.
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-memo
   */
  'react-hooks-extra/ensure-use-memo-has-non-empty-deps'?: Linter.RuleEntry<[]>
  /**
   * Disallow direct calls to the `set` function of `useState` in `useEffect`.
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-direct-set-state-in-use-effect
   */
  'react-hooks-extra/no-direct-set-state-in-use-effect'?: Linter.RuleEntry<[]>
  /**
   * Disallow direct calls to the `set` function of `useState` in `useLayoutEffect`.
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-direct-set-state-in-use-layout-effect
   */
  'react-hooks-extra/no-direct-set-state-in-use-layout-effect'?: Linter.RuleEntry<[]>
  /**
   * Enforces that a function with the `use` prefix should use at least one Hook inside of it.
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-prefix
   */
  'react-hooks-extra/no-redundant-custom-hook'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary usage of `useCallback`.
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-callback
   */
  'react-hooks-extra/no-unnecessary-use-callback'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary usage of `useMemo`.
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-memo
   */
  'react-hooks-extra/no-unnecessary-use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces that a function with the `use` prefix should use at least one Hook inside of it.
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-prefix
   */
  'react-hooks-extra/no-unnecessary-use-prefix'?: Linter.RuleEntry<[]>
  /**
   * Enforces that a function with the `use` prefix should use at least one Hook inside of it.
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-prefix
   */
  'react-hooks-extra/no-useless-custom-hooks'?: Linter.RuleEntry<[]>
  /**
   * Enforces function calls made inside `useState` to be wrapped in an `initializer function`.
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-prefer-use-state-lazy-initialization
   */
  'react-hooks-extra/prefer-use-state-lazy-initialization'?: Linter.RuleEntry<[]>
  /**
   * verifies the list of dependencies for Hooks like useEffect and similar
   * @see https://github.com/facebook/react/issues/14920
   */
  'react-hooks/exhaustive-deps'?: Linter.RuleEntry<ReactHooksExhaustiveDeps>
  /**
   * enforces the Rules of Hooks
   * @see https://reactjs.org/docs/hooks-rules.html
   */
  'react-hooks/rules-of-hooks'?: Linter.RuleEntry<[]>
  /**
   * Enforces naming conventions for components.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-component-name
   */
  'react-naming-convention/component-name'?: Linter.RuleEntry<ReactNamingConventionComponentName>
  /**
   * Enforces context name to be a valid component name with the suffix `Context`.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-context-name
   */
  'react-naming-convention/context-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces consistent file naming conventions.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-filename
   */
  'react-naming-convention/filename'?: Linter.RuleEntry<ReactNamingConventionFilename>
  /**
   * Enforces consistent file naming conventions.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-filename-extension
   */
  'react-naming-convention/filename-extension'?: Linter.RuleEntry<ReactNamingConventionFilenameExtension>
  /**
   * Enforces destructuring and symmetric naming of `useState` hook value and setter.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-use-state
   */
  'react-naming-convention/use-state'?: Linter.RuleEntry<[]>
  'react-refresh/only-export-components'?: Linter.RuleEntry<ReactRefreshOnlyExportComponents>
  /**
   * Enforces explicit boolean values for boolean attributes.
   * @see https://eslint-react.xyz/docs/rules/avoid-shorthand-boolean
   */
  'react/avoid-shorthand-boolean'?: Linter.RuleEntry<[]>
  /**
   * Enforces explicit `<Fragment>` components instead of the shorthand `<>` or `</>` syntax.
   * @see https://eslint-react.xyz/docs/rules/avoid-shorthand-fragment
   */
  'react/avoid-shorthand-fragment'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless `forwardRef` calls on components that don't use `ref`s.
   * @see https://eslint-react.xyz/docs/rules/no-useless-forward-ref
   */
  'react/ensure-forward-ref-using-ref'?: Linter.RuleEntry<[]>
  /**
   * Enforces that the 'key' attribute is placed before the spread attribute in JSX elements.
   * @see https://eslint-react.xyz/docs/rules/jsx-key-before-spread
   */
  'react/jsx-key-before-spread'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate props in JSX elements.
   * @see https://eslint-react.xyz/docs/rules/jsx-no-duplicate-props
   */
  'react/jsx-no-duplicate-props'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'IIFE' in JSX elements.
   * @see https://eslint-react.xyz/docs/rules/jsx-no-iife
   */
  'react/jsx-no-iife'?: Linter.RuleEntry<[]>
  /**
   * Disallow undefined variables in JSX.
   * @see https://eslint-react.xyz/docs/rules/jsx-no-undef
   */
  'react/jsx-no-undef'?: Linter.RuleEntry<[]>
  /**
   * Marks React variables as used when JSX is used.
   * @see https://eslint-react.xyz/docs/rules/jsx-uses-react
   */
  'react/jsx-uses-react'?: Linter.RuleEntry<[]>
  /**
   * Marks variables used in JSX elements as used.
   * @see https://eslint-react.xyz/docs/rules/jsx-uses-vars
   */
  'react/jsx-uses-vars'?: Linter.RuleEntry<[]>
  /**
   * Disallow accessing `this.state` inside `setState` calls.
   * @see https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
   */
  'react/no-access-state-in-setstate'?: Linter.RuleEntry<[]>
  /**
   * Disallow an item's index in the array as its key.
   * @see https://eslint-react.xyz/docs/rules/no-array-index-key
   */
  'react/no-array-index-key'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Children.count`.
   * @see https://eslint-react.xyz/docs/rules/no-children-count
   */
  'react/no-children-count'?: Linter.RuleEntry<[]>
  /**
   * Disallow 'Children.forEach'.
   * @see https://eslint-react.xyz/docs/rules/no-children-for-each
   */
  'react/no-children-for-each'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Children.map`.
   * @see https://eslint-react.xyz/docs/rules/no-children-map
   */
  'react/no-children-map'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Children.only`.
   * @see https://eslint-react.xyz/docs/rules/no-children-only
   */
  'react/no-children-only'?: Linter.RuleEntry<[]>
  /**
   * Disallow passing `children` as a prop.
   * @see https://eslint-react.xyz/docs/rules/no-children-prop
   */
  'react/no-children-prop'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Children.toArray`.
   * @see https://eslint-react.xyz/docs/rules/no-children-to-array
   */
  'react/no-children-to-array'?: Linter.RuleEntry<[]>
  /**
   * Disallow class components except for error boundaries.
   * @see https://eslint-react.xyz/docs/rules/no-class-component
   */
  'react/no-class-component'?: Linter.RuleEntry<[]>
  /**
   * Disallow `cloneElement`.
   * @see https://eslint-react.xyz/docs/rules/no-clone-element
   */
  'react/no-clone-element'?: Linter.RuleEntry<[]>
  /**
   * Prevents comments from being inserted as text nodes.
   * @see https://eslint-react.xyz/docs/rules/no-comment-textnodes
   */
  'react/no-comment-textnodes'?: Linter.RuleEntry<[]>
  /**
   * Disallow complex conditional rendering in JSX expressions.
   * @see https://eslint-react.xyz/docs/rules/no-complex-conditional-rendering
   */
  'react/no-complex-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * Disallow complex conditional rendering in JSX expressions.
   * @see https://eslint-react.xyz/docs/rules/no-complex-conditional-rendering
   */
  'react/no-complicated-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * Replace usages of `componentWillMount` with `UNSAFE_componentWillMount`.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-mount
   */
  'react/no-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Replace usages of `componentWillReceiveProps` with `UNSAFE_componentWillReceiveProps`.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-receive-props
   */
  'react/no-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Replace usages of `componentWillUpdate` with `UNSAFE_componentWillUpdate`.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-update
   */
  'react/no-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Replace usages of `<Context.Provider>` with `<Context>`.
   * @see https://eslint-react.xyz/docs/rules/no-context-provider
   */
  'react/no-context-provider'?: Linter.RuleEntry<[]>
  /**
   * Disallow `createRef` in function components.
   * @see https://eslint-react.xyz/docs/rules/no-create-ref
   */
  'react/no-create-ref'?: Linter.RuleEntry<[]>
  /**
   * Disallow `defaultProps` property in favor of ES6 default parameters.
   * @see https://eslint-react.xyz/docs/rules/no-default-props
   */
  'react/no-default-props'?: Linter.RuleEntry<[]>
  /**
   * Disallow direct mutation of `this.state`.
   * @see https://eslint-react.xyz/docs/rules/no-direct-mutation-state
   */
  'react/no-direct-mutation-state'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate props in JSX elements.
   * @see https://eslint-react.xyz/docs/rules/jsx-no-duplicate-props
   */
  'react/no-duplicate-jsx-props'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate `key` on elements in the same array or a list of `children`.
   * @see https://eslint-react.xyz/docs/rules/no-duplicate-key
   */
  'react/no-duplicate-key'?: Linter.RuleEntry<[]>
  /**
   * Replaces usages of `forwardRef` with passing `ref` as a prop.
   * @see https://eslint-react.xyz/docs/rules/no-forward-ref
   */
  'react/no-forward-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents `key` from not being explicitly specified (e.g. spreading `key` from objects).
   * @see https://eslint-react.xyz/docs/rules/no-implicit-key
   */
  'react/no-implicit-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents problematic leaked values from being rendered.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
   */
  'react/no-leaked-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all components have a `displayName` which can be used in devtools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-component-display-name
   */
  'react/no-missing-component-display-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all contexts have a `displayName` which can be used in devtools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-context-display-name
   */
  'react/no-missing-context-display-name'?: Linter.RuleEntry<[]>
  /**
   * Disallow missing `key` on items in list rendering.
   * @see https://eslint-react.xyz/docs/rules/no-missing-key
   */
  'react/no-missing-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents incorrect usage of `captureOwnerStack`.
   * @see https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack
   */
  'react/no-misused-capture-owner-stack'?: Linter.RuleEntry<[]>
  /**
   * Disallow nesting component definitions inside other components.
   * @see https://eslint-react.xyz/docs/rules/no-nested-component-definitions
   */
  'react/no-nested-component-definitions'?: Linter.RuleEntry<[]>
  /**
   * Disallow nesting component definitions inside other components.
   * @see https://eslint-react.xyz/docs/rules/no-nested-component-definitions
   */
  'react/no-nested-components'?: Linter.RuleEntry<[]>
  /**
   * Disallow nesting lazy component declarations inside other components.
   * @see https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations
   */
  'react/no-nested-lazy-component-declarations'?: Linter.RuleEntry<[]>
  /**
   * Disallow `propTypes` in favor of TypeScript or another type-checking solution.
   * @see https://eslint-react.xyz/docs/rules/no-prop-types
   */
  'react/no-prop-types'?: Linter.RuleEntry<[]>
  /**
   * Disallow `shouldComponentUpdate` when extending `React.PureComponent`.
   * @see https://eslint-react.xyz/docs/rules/no-redundant-should-component-update
   */
  'react/no-redundant-should-component-update'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling `this.setState` in `componentDidMount` outside of functions, such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
   */
  'react/no-set-state-in-component-did-mount'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling `this.setState` in `componentDidUpdate` outside of functions, such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
   */
  'react/no-set-state-in-component-did-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling `this.setState` in `componentWillUpdate` outside of functions, such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
   */
  'react/no-set-state-in-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Replaces string refs with callback refs.
   * @see https://eslint-react.xyz/docs/rules/no-string-refs
   */
  'react/no-string-refs'?: Linter.RuleEntry<[]>
  /**
   * Warns the usage of `UNSAFE_componentWillMount` in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
   */
  'react/no-unsafe-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Warns the usage of `UNSAFE_componentWillReceiveProps` in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
   */
  'react/no-unsafe-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Warns the usage of `UNSAFE_componentWillUpdate` in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
   */
  'react/no-unsafe-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Prevents non-stable values (i.e. object literals) from being used as a value for `Context.Provider`.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-context-value
   */
  'react/no-unstable-context-value'?: Linter.RuleEntry<[]>
  /**
   * Prevents using referential-type values as default props in object destructuring.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-default-props
   */
  'react/no-unstable-default-props'?: Linter.RuleEntry<[]>
  /**
   * Warns unused class component methods and properties.
   * @see https://eslint-react.xyz/docs/rules/no-unused-class-component-members
   */
  'react/no-unused-class-component-members'?: Linter.RuleEntry<[]>
  /**
   * Warns unused class component state.
   * @see https://eslint-react.xyz/docs/rules/no-unused-state
   */
  'react/no-unused-state'?: Linter.RuleEntry<[]>
  /**
   * Replaces usages of `useContext` with `use`.
   * @see https://eslint-react.xyz/docs/rules/no-use-context
   */
  'react/no-use-context'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless `forwardRef` calls on components that don't use `ref`s.
   * @see https://eslint-react.xyz/docs/rules/no-useless-forward-ref
   */
  'react/no-useless-forward-ref'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless fragment elements.
   * @see https://eslint-react.xyz/docs/rules/no-useless-fragment
   */
  'react/no-useless-fragment'?: Linter.RuleEntry<ReactNoUselessFragment>
  /**
   * Enforces destructuring assignment for component props and context.
   * @see https://eslint-react.xyz/docs/rules/prefer-destructuring-assignment
   */
  'react/prefer-destructuring-assignment'?: Linter.RuleEntry<[]>
  /**
   * Enforces React is imported via a namespace import.
   * @see https://eslint-react.xyz/docs/rules/prefer-react-namespace-import
   */
  'react/prefer-react-namespace-import'?: Linter.RuleEntry<[]>
  /**
   * Enforces read-only props in components.
   * @see https://eslint-react.xyz/docs/rules/prefer-read-only-props
   */
  'react/prefer-read-only-props'?: Linter.RuleEntry<[]>
  /**
   * Enforces shorthand syntax for boolean attributes.
   * @see https://eslint-react.xyz/docs/rules/prefer-shorthand-boolean
   */
  'react/prefer-shorthand-boolean'?: Linter.RuleEntry<[]>
  /**
   * Enforces shorthand syntax for fragments.
   * @see https://eslint-react.xyz/docs/rules/prefer-shorthand-fragment
   */
  'react/prefer-shorthand-fragment'?: Linter.RuleEntry<[]>
  /**
   * Marks variables used in JSX elements as used.
   * @see https://eslint-react.xyz/docs/rules/jsx-uses-vars
   */
  'react/use-jsx-vars'?: Linter.RuleEntry<[]>
}

/* ======= Declarations ======= */
// ----- react-dom/no-unknown-property -----
type ReactDomNoUnknownProperty = []|[{
  ignore?: string[]
  requireDataLowercase?: boolean
}]
// ----- react-hooks/exhaustive-deps -----
type ReactHooksExhaustiveDeps = []|[{
  additionalHooks?: string
  enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean
}]
// ----- react-naming-convention/component-name -----
type ReactNamingConventionComponentName = []|[(("PascalCase" | "CONSTANT_CASE") | {
  allowAllCaps?: boolean
  excepts?: string[]
  rule?: ("PascalCase" | "CONSTANT_CASE")
})]
// ----- react-naming-convention/filename -----
type ReactNamingConventionFilename = []|[(("PascalCase" | "camelCase" | "kebab-case" | "snake_case") | {
  excepts?: string[]
  extensions?: string[]
  rule?: ("PascalCase" | "camelCase" | "kebab-case" | "snake_case")
})]
// ----- react-naming-convention/filename-extension -----
type ReactNamingConventionFilenameExtension = []|[(("always" | "as-needed") | {
  allow?: ("always" | "as-needed")
  extensions?: string[]
  ignoreFilesWithoutCode?: boolean
})]
// ----- react-refresh/only-export-components -----
type ReactRefreshOnlyExportComponents = []|[{
  allowExportNames?: string[]
  allowConstantExport?: boolean
  customHOCs?: string[]
  checkJS?: boolean
}]
// ----- react/no-useless-fragment -----
type ReactNoUselessFragment = []|[{
  
  allowExpressions?: boolean
}]