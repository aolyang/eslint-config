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
   * disallow void elements (AKA self-closing elements) from having children
   * @see https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children
   */
  'react-dom/no-children-in-void-dom-elements'?: Linter.RuleEntry<[]>
  /**
   * disallow when a DOM component is using 'dangerouslySetInnerHTML'
   * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml
   */
  'react-dom/no-dangerously-set-innerhtml'?: Linter.RuleEntry<[]>
  /**
   * disallow when a DOM component is using both 'children' and 'dangerouslySetInnerHTML'
   * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children
   */
  'react-dom/no-dangerously-set-innerhtml-with-children'?: Linter.RuleEntry<[]>
  /**
   * disallow 'findDOMNode'
   * @see https://eslint-react.xyz/docs/rules/dom-no-find-dom-node
   */
  'react-dom/no-find-dom-node'?: Linter.RuleEntry<[]>
  /**
   * enforce that button component have an explicit 'type' attribute
   * @see https://eslint-react.xyz/docs/rules/dom-no-missing-button-type
   */
  'react-dom/no-missing-button-type'?: Linter.RuleEntry<[]>
  /**
   * enforce that 'iframe' component have an explicit 'sandbox' attribute
   * @see https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox
   */
  'react-dom/no-missing-iframe-sandbox'?: Linter.RuleEntry<[]>
  /**
   * enforce that namespaces are not used in React elements
   * @see https://eslint-react.xyz/docs/rules/dom-no-namespace
   */
  'react-dom/no-namespace'?: Linter.RuleEntry<[]>
  /**
   * disallow usage of the return value of 'ReactDOM.render'
   * @see https://eslint-react.xyz/docs/rules/dom-no-render-return-value
   */
  'react-dom/no-render-return-value'?: Linter.RuleEntry<[]>
  /**
   * disallow 'javascript:' URLs as JSX event handler prop's value
   * @see https://eslint-react.xyz/docs/rules/dom-no-script-url
   */
  'react-dom/no-script-url'?: Linter.RuleEntry<[]>
  /**
   * disallow usage of unknown DOM property
   * @see https://eslint-react.xyz/docs/rules/dom-no-unknown-property
   */
  'react-dom/no-unknown-property'?: Linter.RuleEntry<ReactDomNoUnknownProperty>
  /**
   * disallow unsafe iframe 'sandbox' attribute combinations
   * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-iframe-sandbox
   */
  'react-dom/no-unsafe-iframe-sandbox'?: Linter.RuleEntry<[]>
  /**
   * disallow 'target="_blank"' on an external link without 'rel="noreferrer noopener"'
   * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank
   */
  'react-dom/no-unsafe-target-blank'?: Linter.RuleEntry<[]>
  /**
   * disallow void elements (AKA self-closing elements) from having children
   * @see https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children
   */
  'react-dom/no-void-elements-with-children'?: Linter.RuleEntry<[]>
  /**
   * enforce custom Hooks to use at least one other hook inside
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-useless-custom-hooks
   */
  'react-hooks-extra/ensure-custom-hooks-using-other-hooks'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary usage of 'useCallback'
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-callback
   */
  'react-hooks-extra/ensure-use-callback-has-non-empty-deps'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary usage of 'useMemo'
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-memo
   */
  'react-hooks-extra/ensure-use-memo-has-non-empty-deps'?: Linter.RuleEntry<[]>
  /**
   * disallow direct calls to the 'set' function of 'useState' in 'useEffect'
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-direct-set-state-in-use-effect
   */
  'react-hooks-extra/no-direct-set-state-in-use-effect'?: Linter.RuleEntry<[]>
  /**
   * disallow direct calls to the 'set' function of 'useState' in 'useLayoutEffect'
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-direct-set-state-in-use-layout-effect
   */
  'react-hooks-extra/no-direct-set-state-in-use-layout-effect'?: Linter.RuleEntry<[]>
  /**
   * enforce custom Hooks to use at least one other hook inside
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-useless-custom-hooks
   */
  'react-hooks-extra/no-redundant-custom-hook'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary usage of 'useCallback'
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-callback
   */
  'react-hooks-extra/no-unnecessary-use-callback'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary usage of 'useMemo'
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-memo
   */
  'react-hooks-extra/no-unnecessary-use-memo'?: Linter.RuleEntry<[]>
  /**
   * enforce custom Hooks to use at least one other hook inside
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-useless-custom-hooks
   */
  'react-hooks-extra/no-useless-custom-hooks'?: Linter.RuleEntry<[]>
  /**
   * disallow function calls in 'useState' that aren't wrapped in an initializer function
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
   * enforce component naming convention to 'PascalCase' or 'CONSTANT_CASE'
   * @see https://eslint-react.xyz/docs/rules/naming-convention-component-name
   */
  'react-naming-convention/component-name'?: Linter.RuleEntry<ReactNamingConventionComponentName>
  /**
   * enforce naming convention for JSX filenames
   * @see https://eslint-react.xyz/docs/rules/naming-convention-filename
   */
  'react-naming-convention/filename'?: Linter.RuleEntry<ReactNamingConventionFilename>
  /**
   * enforce naming convention for JSX file extensions
   * @see https://eslint-react.xyz/docs/rules/naming-convention-filename-extension
   */
  'react-naming-convention/filename-extension'?: Linter.RuleEntry<ReactNamingConventionFilenameExtension>
  /**
   * enforce destructuring and symmetric naming of 'useState' hook value and setter variables
   * @see https://eslint-react.xyz/docs/rules/naming-convention-use-state
   */
  'react-naming-convention/use-state'?: Linter.RuleEntry<[]>
  'react-refresh/only-export-components'?: Linter.RuleEntry<ReactRefreshOnlyExportComponents>
  /**
   * disallow using shorthand boolean attributes
   * @see https://eslint-react.xyz/docs/rules/avoid-shorthand-boolean
   */
  'react/avoid-shorthand-boolean'?: Linter.RuleEntry<[]>
  /**
   * disallow using shorthand fragment syntax
   * @see https://eslint-react.xyz/docs/rules/avoid-shorthand-fragment
   */
  'react/avoid-shorthand-fragment'?: Linter.RuleEntry<[]>
  /**
   * require a 'ref' parameter to be set when using 'forwardRef'
   * @see https://eslint-react.xyz/docs/rules/ensure-forward-ref-using-ref
   */
  'react/ensure-forward-ref-using-ref'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate props
   * @see https://eslint-react.xyz/docs/rules/no-duplicate-jsx-props
   */
  'react/jsx-no-duplicate-props'?: Linter.RuleEntry<[]>
  /**
   * helpes `eslint/no-unused-vars` to correctly mark JSX variables as used.
   * @see https://eslint-react.xyz/docs/rules/use-jsx-vars
   */
  'react/jsx-uses-vars'?: Linter.RuleEntry<[]>
  /**
   * disallow accessing 'this.state' within 'setState'
   * @see https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
   */
  'react/no-access-state-in-setstate'?: Linter.RuleEntry<[]>
  /**
   * disallow using Array index as 'key'
   * @see https://eslint-react.xyz/docs/rules/no-array-index-key
   */
  'react/no-array-index-key'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'Children.count'
   * @see https://eslint-react.xyz/docs/rules/no-children-count
   */
  'react/no-children-count'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'Children.forEach'
   * @see https://eslint-react.xyz/docs/rules/no-children-for-each
   */
  'react/no-children-for-each'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'Children.map'
   * @see https://eslint-react.xyz/docs/rules/no-children-map
   */
  'react/no-children-map'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'Children.only'
   * @see https://eslint-react.xyz/docs/rules/no-children-only
   */
  'react/no-children-only'?: Linter.RuleEntry<[]>
  /**
   * disallow passing 'children' as props
   * @see https://eslint-react.xyz/docs/rules/no-children-prop
   */
  'react/no-children-prop'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'Children.toArray'
   * @see https://eslint-react.xyz/docs/rules/no-children-to-array
   */
  'react/no-children-to-array'?: Linter.RuleEntry<[]>
  /**
   * disallow using class components
   * @see https://eslint-react.xyz/docs/rules/no-class-component
   */
  'react/no-class-component'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'cloneElement'
   * @see https://eslint-react.xyz/docs/rules/no-clone-element
   */
  'react/no-clone-element'?: Linter.RuleEntry<[]>
  /**
   * disallow comments from being inserted as text nodes
   * @see https://eslint-react.xyz/docs/rules/no-comment-textnodes
   */
  'react/no-comment-textnodes'?: Linter.RuleEntry<[]>
  /**
   * disallow complex conditional rendering
   * @see https://eslint-react.xyz/docs/rules/no-complex-conditional-rendering
   */
  'react/no-complex-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * disallow complex conditional rendering
   * @see https://eslint-react.xyz/docs/rules/no-complex-conditional-rendering
   */
  'react/no-complicated-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'componentWillMount'
   * @see https://eslint-react.xyz/docs/rules/no-component-will-mount
   */
  'react/no-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'componentWillReceiveProps'
   * @see https://eslint-react.xyz/docs/rules/no-component-will-receive-props
   */
  'react/no-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'componentWillReceiveProps'
   * @see https://eslint-react.xyz/docs/rules/no-component-will-update
   */
  'react/no-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * disallow the use of '<Context.Provider>'
   * @see https://eslint-react.xyz/docs/rules/no-context-provider
   */
  'react/no-context-provider'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'createRef' in function components
   * @see https://eslint-react.xyz/docs/rules/no-create-ref
   */
  'react/no-create-ref'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'defaultProps' property in components
   * @see https://eslint-react.xyz/docs/rules/no-default-props
   */
  'react/no-default-props'?: Linter.RuleEntry<[]>
  /**
   * disallow direct mutation of state
   * @see https://eslint-react.xyz/docs/rules/no-direct-mutation-state
   */
  'react/no-direct-mutation-state'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate props
   * @see https://eslint-react.xyz/docs/rules/no-duplicate-jsx-props
   */
  'react/no-duplicate-jsx-props'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate keys when rendering list
   * @see https://eslint-react.xyz/docs/rules/no-duplicate-key
   */
  'react/no-duplicate-key'?: Linter.RuleEntry<[]>
  /**
   * disallow the use of 'forwardRef'
   * @see https://eslint-react.xyz/docs/rules/no-forward-ref
   */
  'react/no-forward-ref'?: Linter.RuleEntry<[]>
  /**
   * disallow implicit 'key' props
   * @see https://eslint-react.xyz/docs/rules/no-implicit-key
   */
  'react/no-implicit-key'?: Linter.RuleEntry<[]>
  /**
   * disallow problematic leaked values from being rendered
   * @see https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
   */
  'react/no-leaked-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * require 'displayName' for 'memo' and 'forwardRef' components
   * @see https://eslint-react.xyz/docs/rules/no-missing-component-display-name
   */
  'react/no-missing-component-display-name'?: Linter.RuleEntry<[]>
  /**
   * require 'key' when rendering list
   * @see https://eslint-react.xyz/docs/rules/no-missing-key
   */
  'react/no-missing-key'?: Linter.RuleEntry<[]>
  /**
   * disallow using unstable nested components
   * @see https://eslint-react.xyz/docs/rules/no-nested-components
   */
  'react/no-nested-components'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'propTypes' property in components
   * @see https://eslint-react.xyz/docs/rules/no-prop-types
   */
  'react/no-prop-types'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'shouldComponentUpdate' in class component extends 'React.PureComponent'
   * @see https://eslint-react.xyz/docs/rules/no-redundant-should-component-update
   */
  'react/no-redundant-should-component-update'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'setState' in 'componentDidMount'
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
   */
  'react/no-set-state-in-component-did-mount'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'setState' in 'componentDidUpdate'
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
   */
  'react/no-set-state-in-component-did-update'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'setState' in 'componentWillUpdate'
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
   */
  'react/no-set-state-in-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated string refs
   * @see https://eslint-react.xyz/docs/rules/no-string-refs
   */
  'react/no-string-refs'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'UNSAFE_componentWillMount'
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
   */
  'react/no-unsafe-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'UNSAFE_componentWillReceiveProps'
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
   */
  'react/no-unsafe-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'UNSAFE_componentWillUpdate'
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
   */
  'react/no-unsafe-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * disallow passing constructed values to context providers
   * @see https://eslint-react.xyz/docs/rules/no-unstable-context-value
   */
  'react/no-unstable-context-value'?: Linter.RuleEntry<[]>
  /**
   * disallow using unstable value as default param in function component
   * @see https://eslint-react.xyz/docs/rules/no-unstable-default-props
   */
  'react/no-unstable-default-props'?: Linter.RuleEntry<[]>
  /**
   * disallow unused class component members
   * @see https://eslint-react.xyz/docs/rules/no-unused-class-component-members
   */
  'react/no-unused-class-component-members'?: Linter.RuleEntry<[]>
  /**
   * disallow unused state of class component
   * @see https://eslint-react.xyz/docs/rules/no-unused-state
   */
  'react/no-unused-state'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary fragments
   * @see https://eslint-react.xyz/docs/rules/no-useless-fragment
   */
  'react/no-useless-fragment'?: Linter.RuleEntry<ReactNoUselessFragment>
  /**
   * enforce using destructuring assignment in component props and context
   * @see https://eslint-react.xyz/docs/rules/prefer-destructuring-assignment
   */
  'react/prefer-destructuring-assignment'?: Linter.RuleEntry<[]>
  /**
   * enforce React is imported via a namespace import
   * @see https://eslint-react.xyz/docs/rules/prefer-react-namespace-import
   */
  'react/prefer-react-namespace-import'?: Linter.RuleEntry<[]>
  /**
   * enforce read-only props in components
   * @see https://eslint-react.xyz/docs/rules/prefer-read-only-props
   */
  'react/prefer-read-only-props'?: Linter.RuleEntry<[]>
  /**
   * enforce using shorthand boolean attributes
   * @see https://eslint-react.xyz/docs/rules/prefer-shorthand-boolean
   */
  'react/prefer-shorthand-boolean'?: Linter.RuleEntry<[]>
  /**
   * enforce using fragment syntax instead of 'Fragment' component
   * @see https://eslint-react.xyz/docs/rules/prefer-shorthand-fragment
   */
  'react/prefer-shorthand-fragment'?: Linter.RuleEntry<[]>
  /**
   * helpes `eslint/no-unused-vars` to correctly mark JSX variables as used.
   * @see https://eslint-react.xyz/docs/rules/use-jsx-vars
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
  allowLeadingUnderscore?: boolean
  allowNamespace?: boolean
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