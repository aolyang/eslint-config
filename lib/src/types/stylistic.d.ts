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
   * Enforce linebreaks after opening and before closing array brackets
   * @see https://eslint.style/rules/js/array-bracket-newline
   */
  '@stylistic/array-bracket-newline'?: Linter.RuleEntry<StylisticArrayBracketNewline>
  /**
   * Enforce consistent spacing inside array brackets
   * @see https://eslint.style/rules/js/array-bracket-spacing
   */
  '@stylistic/array-bracket-spacing'?: Linter.RuleEntry<StylisticArrayBracketSpacing>
  /**
   * Enforce line breaks after each array element
   * @see https://eslint.style/rules/js/array-element-newline
   */
  '@stylistic/array-element-newline'?: Linter.RuleEntry<StylisticArrayElementNewline>
  /**
   * Require parentheses around arrow function arguments
   * @see https://eslint.style/rules/js/arrow-parens
   */
  '@stylistic/arrow-parens'?: Linter.RuleEntry<StylisticArrowParens>
  /**
   * Enforce consistent spacing before and after the arrow in arrow functions
   * @see https://eslint.style/rules/js/arrow-spacing
   */
  '@stylistic/arrow-spacing'?: Linter.RuleEntry<StylisticArrowSpacing>
  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block
   * @see https://eslint.style/rules/ts/block-spacing
   */
  '@stylistic/block-spacing'?: Linter.RuleEntry<StylisticBlockSpacing>
  /**
   * Enforce consistent brace style for blocks
   * @see https://eslint.style/rules/ts/brace-style
   */
  '@stylistic/brace-style'?: Linter.RuleEntry<StylisticBraceStyle>
  /**
   * Require or disallow trailing commas
   * @see https://eslint.style/rules/ts/comma-dangle
   */
  '@stylistic/comma-dangle'?: Linter.RuleEntry<StylisticCommaDangle>
  /**
   * Enforce consistent spacing before and after commas
   * @see https://eslint.style/rules/ts/comma-spacing
   */
  '@stylistic/comma-spacing'?: Linter.RuleEntry<StylisticCommaSpacing>
  /**
   * Enforce consistent comma style
   * @see https://eslint.style/rules/js/comma-style
   */
  '@stylistic/comma-style'?: Linter.RuleEntry<StylisticCommaStyle>
  /**
   * Enforce consistent spacing inside computed property brackets
   * @see https://eslint.style/rules/js/computed-property-spacing
   */
  '@stylistic/computed-property-spacing'?: Linter.RuleEntry<StylisticComputedPropertySpacing>
  /**
   * Enforce consistent line breaks after opening and before closing braces
   * @see https://eslint.style/rules/plus/curly-newline
   */
  '@stylistic/curly-newline'?: Linter.RuleEntry<StylisticCurlyNewline>
  /**
   * Enforce consistent newlines before and after dots
   * @see https://eslint.style/rules/js/dot-location
   */
  '@stylistic/dot-location'?: Linter.RuleEntry<StylisticDotLocation>
  /**
   * Require or disallow newline at the end of files
   * @see https://eslint.style/rules/js/eol-last
   */
  '@stylistic/eol-last'?: Linter.RuleEntry<StylisticEolLast>
  /**
   * Require or disallow spacing between function identifiers and their invocations
   * @see https://eslint.style/rules/ts/function-call-spacing
   */
  '@stylistic/func-call-spacing'?: Linter.RuleEntry<StylisticFuncCallSpacing>
  /**
   * Enforce line breaks between arguments of a function call
   * @see https://eslint.style/rules/js/function-call-argument-newline
   */
  '@stylistic/function-call-argument-newline'?: Linter.RuleEntry<StylisticFunctionCallArgumentNewline>
  /**
   * Require or disallow spacing between function identifiers and their invocations
   * @see https://eslint.style/rules/ts/function-call-spacing
   */
  '@stylistic/function-call-spacing'?: Linter.RuleEntry<StylisticFunctionCallSpacing>
  /**
   * Enforce consistent line breaks inside function parentheses
   * @see https://eslint.style/rules/js/function-paren-newline
   */
  '@stylistic/function-paren-newline'?: Linter.RuleEntry<StylisticFunctionParenNewline>
  /**
   * Enforce consistent spacing around `*` operators in generator functions
   * @see https://eslint.style/rules/js/generator-star-spacing
   */
  '@stylistic/generator-star-spacing'?: Linter.RuleEntry<StylisticGeneratorStarSpacing>
  /**
   * Enforce the location of arrow function bodies
   * @see https://eslint.style/rules/js/implicit-arrow-linebreak
   */
  '@stylistic/implicit-arrow-linebreak'?: Linter.RuleEntry<StylisticImplicitArrowLinebreak>
  /**
   * Enforce consistent indentation
   * @see https://eslint.style/rules/ts/indent
   */
  '@stylistic/indent'?: Linter.RuleEntry<StylisticIndent>
  /**
   * Indentation for binary operators
   * @see https://eslint.style/rules/plus/indent-binary-ops
   */
  '@stylistic/indent-binary-ops'?: Linter.RuleEntry<StylisticIndentBinaryOps>
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   * @see https://eslint.style/rules/jsx/jsx-child-element-spacing
   */
  '@stylistic/jsx-child-element-spacing'?: Linter.RuleEntry<[]>
  /**
   * Enforce closing bracket location in JSX
   * @see https://eslint.style/rules/jsx/jsx-closing-bracket-location
   */
  '@stylistic/jsx-closing-bracket-location'?: Linter.RuleEntry<StylisticJsxClosingBracketLocation>
  /**
   * Enforce closing tag location for multiline JSX
   * @see https://eslint.style/rules/jsx/jsx-closing-tag-location
   */
  '@stylistic/jsx-closing-tag-location'?: Linter.RuleEntry<StylisticJsxClosingTagLocation>
  /**
   * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
   * @see https://eslint.style/rules/jsx/jsx-curly-brace-presence
   */
  '@stylistic/jsx-curly-brace-presence'?: Linter.RuleEntry<StylisticJsxCurlyBracePresence>
  /**
   * Enforce consistent linebreaks in curly braces in JSX attributes and expressions
   * @see https://eslint.style/rules/jsx/jsx-curly-newline
   */
  '@stylistic/jsx-curly-newline'?: Linter.RuleEntry<StylisticJsxCurlyNewline>
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   * @see https://eslint.style/rules/jsx/jsx-curly-spacing
   */
  '@stylistic/jsx-curly-spacing'?: Linter.RuleEntry<StylisticJsxCurlySpacing>
  /**
   * Enforce or disallow spaces around equal signs in JSX attributes
   * @see https://eslint.style/rules/jsx/jsx-equals-spacing
   */
  '@stylistic/jsx-equals-spacing'?: Linter.RuleEntry<StylisticJsxEqualsSpacing>
  /**
   * Enforce proper position of the first property in JSX
   * @see https://eslint.style/rules/jsx/jsx-first-prop-new-line
   */
  '@stylistic/jsx-first-prop-new-line'?: Linter.RuleEntry<StylisticJsxFirstPropNewLine>
  /**
   * Enforce line breaks before and after JSX elements when they are used as arguments to a function.
   * @see https://eslint.style/rules/jsx/jsx-function-call-newline
   */
  '@stylistic/jsx-function-call-newline'?: Linter.RuleEntry<StylisticJsxFunctionCallNewline>
  /**
   * Enforce JSX indentation. Deprecated, use `indent` rule instead.
   * @see https://eslint.style/rules/jsx/jsx-indent
   * @deprecated
   */
  '@stylistic/jsx-indent'?: Linter.RuleEntry<StylisticJsxIndent>
  /**
   * Enforce props indentation in JSX
   * @see https://eslint.style/rules/jsx/jsx-indent-props
   */
  '@stylistic/jsx-indent-props'?: Linter.RuleEntry<StylisticJsxIndentProps>
  /**
   * Enforce maximum of props on a single line in JSX
   * @see https://eslint.style/rules/jsx/jsx-max-props-per-line
   */
  '@stylistic/jsx-max-props-per-line'?: Linter.RuleEntry<StylisticJsxMaxPropsPerLine>
  /**
   * Require or prevent a new line after jsx elements and expressions.
   * @see https://eslint.style/rules/jsx/jsx-newline
   */
  '@stylistic/jsx-newline'?: Linter.RuleEntry<StylisticJsxNewline>
  /**
   * Require one JSX element per line
   * @see https://eslint.style/rules/jsx/jsx-one-expression-per-line
   */
  '@stylistic/jsx-one-expression-per-line'?: Linter.RuleEntry<StylisticJsxOneExpressionPerLine>
  /**
   * Enforce PascalCase for user-defined JSX components
   * @see https://eslint.style/rules/jsx/jsx-pascal-case
   */
  '@stylistic/jsx-pascal-case'?: Linter.RuleEntry<StylisticJsxPascalCase>
  /**
   * Disallow multiple spaces between inline JSX props
   * @see https://eslint.style/rules/jsx/jsx-props-no-multi-spaces
   */
  '@stylistic/jsx-props-no-multi-spaces'?: Linter.RuleEntry<[]>
  /**
   * Enforce the consistent use of either double or single quotes in JSX attributes
   * @see https://eslint.style/rules/js/jsx-quotes
   */
  '@stylistic/jsx-quotes'?: Linter.RuleEntry<StylisticJsxQuotes>
  /**
   * Disallow extra closing tags for components without children
   * @see https://eslint.style/rules/jsx/jsx-self-closing-comp
   */
  '@stylistic/jsx-self-closing-comp'?: Linter.RuleEntry<StylisticJsxSelfClosingComp>
  /**
   * Enforce props alphabetical sorting
   * @see https://eslint.style/rules/jsx/jsx-sort-props
   */
  '@stylistic/jsx-sort-props'?: Linter.RuleEntry<StylisticJsxSortProps>
  /**
   * Enforce whitespace in and around the JSX opening and closing brackets
   * @see https://eslint.style/rules/jsx/jsx-tag-spacing
   */
  '@stylistic/jsx-tag-spacing'?: Linter.RuleEntry<StylisticJsxTagSpacing>
  /**
   * Disallow missing parentheses around multiline JSX
   * @see https://eslint.style/rules/jsx/jsx-wrap-multilines
   */
  '@stylistic/jsx-wrap-multilines'?: Linter.RuleEntry<StylisticJsxWrapMultilines>
  /**
   * Enforce consistent spacing between property names and type annotations in types and interfaces
   * @see https://eslint.style/rules/ts/key-spacing
   */
  '@stylistic/key-spacing'?: Linter.RuleEntry<StylisticKeySpacing>
  /**
   * Enforce consistent spacing before and after keywords
   * @see https://eslint.style/rules/ts/keyword-spacing
   */
  '@stylistic/keyword-spacing'?: Linter.RuleEntry<StylisticKeywordSpacing>
  /**
   * Enforce position of line comments
   * @see https://eslint.style/rules/js/line-comment-position
   */
  '@stylistic/line-comment-position'?: Linter.RuleEntry<StylisticLineCommentPosition>
  /**
   * Enforce consistent linebreak style
   * @see https://eslint.style/rules/js/linebreak-style
   */
  '@stylistic/linebreak-style'?: Linter.RuleEntry<StylisticLinebreakStyle>
  /**
   * Require empty lines around comments
   * @see https://eslint.style/rules/ts/lines-around-comment
   */
  '@stylistic/lines-around-comment'?: Linter.RuleEntry<StylisticLinesAroundComment>
  /**
   * Require or disallow an empty line between class members
   * @see https://eslint.style/rules/ts/lines-between-class-members
   */
  '@stylistic/lines-between-class-members'?: Linter.RuleEntry<StylisticLinesBetweenClassMembers>
  /**
   * Enforce a maximum line length
   * @see https://eslint.style/rules/js/max-len
   */
  '@stylistic/max-len'?: Linter.RuleEntry<StylisticMaxLen>
  /**
   * Enforce a maximum number of statements allowed per line
   * @see https://eslint.style/rules/js/max-statements-per-line
   */
  '@stylistic/max-statements-per-line'?: Linter.RuleEntry<StylisticMaxStatementsPerLine>
  /**
   * Require a specific member delimiter style for interfaces and type literals
   * @see https://eslint.style/rules/ts/member-delimiter-style
   */
  '@stylistic/member-delimiter-style'?: Linter.RuleEntry<StylisticMemberDelimiterStyle>
  /**
   * Enforce a particular style for multiline comments
   * @see https://eslint.style/rules/js/multiline-comment-style
   */
  '@stylistic/multiline-comment-style'?: Linter.RuleEntry<StylisticMultilineCommentStyle>
  /**
   * Enforce newlines between operands of ternary expressions
   * @see https://eslint.style/rules/js/multiline-ternary
   */
  '@stylistic/multiline-ternary'?: Linter.RuleEntry<StylisticMultilineTernary>
  /**
   * Enforce or disallow parentheses when invoking a constructor with no arguments
   * @see https://eslint.style/rules/js/new-parens
   */
  '@stylistic/new-parens'?: Linter.RuleEntry<StylisticNewParens>
  /**
   * Require a newline after each call in a method chain
   * @see https://eslint.style/rules/js/newline-per-chained-call
   */
  '@stylistic/newline-per-chained-call'?: Linter.RuleEntry<StylisticNewlinePerChainedCall>
  /**
   * Disallow arrow functions where they could be confused with comparisons
   * @see https://eslint.style/rules/js/no-confusing-arrow
   */
  '@stylistic/no-confusing-arrow'?: Linter.RuleEntry<StylisticNoConfusingArrow>
  /**
   * Disallow unnecessary parentheses
   * @see https://eslint.style/rules/ts/no-extra-parens
   */
  '@stylistic/no-extra-parens'?: Linter.RuleEntry<StylisticNoExtraParens>
  /**
   * Disallow unnecessary semicolons
   * @see https://eslint.style/rules/ts/no-extra-semi
   */
  '@stylistic/no-extra-semi'?: Linter.RuleEntry<[]>
  /**
   * Disallow leading or trailing decimal points in numeric literals
   * @see https://eslint.style/rules/js/no-floating-decimal
   */
  '@stylistic/no-floating-decimal'?: Linter.RuleEntry<[]>
  /**
   * Disallow mixed binary operators
   * @see https://eslint.style/rules/js/no-mixed-operators
   */
  '@stylistic/no-mixed-operators'?: Linter.RuleEntry<StylisticNoMixedOperators>
  /**
   * Disallow mixed spaces and tabs for indentation
   * @see https://eslint.style/rules/js/no-mixed-spaces-and-tabs
   */
  '@stylistic/no-mixed-spaces-and-tabs'?: Linter.RuleEntry<StylisticNoMixedSpacesAndTabs>
  /**
   * Disallow multiple spaces
   * @see https://eslint.style/rules/js/no-multi-spaces
   */
  '@stylistic/no-multi-spaces'?: Linter.RuleEntry<StylisticNoMultiSpaces>
  /**
   * Disallow multiple empty lines
   * @see https://eslint.style/rules/js/no-multiple-empty-lines
   */
  '@stylistic/no-multiple-empty-lines'?: Linter.RuleEntry<StylisticNoMultipleEmptyLines>
  /**
   * Disallow all tabs
   * @see https://eslint.style/rules/js/no-tabs
   */
  '@stylistic/no-tabs'?: Linter.RuleEntry<StylisticNoTabs>
  /**
   * Disallow trailing whitespace at the end of lines
   * @see https://eslint.style/rules/js/no-trailing-spaces
   */
  '@stylistic/no-trailing-spaces'?: Linter.RuleEntry<StylisticNoTrailingSpaces>
  /**
   * Disallow whitespace before properties
   * @see https://eslint.style/rules/js/no-whitespace-before-property
   */
  '@stylistic/no-whitespace-before-property'?: Linter.RuleEntry<[]>
  /**
   * Enforce the location of single-line statements
   * @see https://eslint.style/rules/js/nonblock-statement-body-position
   */
  '@stylistic/nonblock-statement-body-position'?: Linter.RuleEntry<StylisticNonblockStatementBodyPosition>
  /**
   * Enforce consistent line breaks after opening and before closing braces
   * @see https://eslint.style/rules/ts/object-curly-newline
   */
  '@stylistic/object-curly-newline'?: Linter.RuleEntry<StylisticObjectCurlyNewline>
  /**
   * Enforce consistent spacing inside braces
   * @see https://eslint.style/rules/ts/object-curly-spacing
   */
  '@stylistic/object-curly-spacing'?: Linter.RuleEntry<StylisticObjectCurlySpacing>
  /**
   * Enforce placing object properties on separate lines
   * @see https://eslint.style/rules/ts/object-property-newline
   */
  '@stylistic/object-property-newline'?: Linter.RuleEntry<StylisticObjectPropertyNewline>
  /**
   * Require or disallow newlines around variable declarations
   * @see https://eslint.style/rules/js/one-var-declaration-per-line
   */
  '@stylistic/one-var-declaration-per-line'?: Linter.RuleEntry<StylisticOneVarDeclarationPerLine>
  /**
   * Enforce consistent linebreak style for operators
   * @see https://eslint.style/rules/js/operator-linebreak
   */
  '@stylistic/operator-linebreak'?: Linter.RuleEntry<StylisticOperatorLinebreak>
  /**
   * Require or disallow padding within blocks
   * @see https://eslint.style/rules/js/padded-blocks
   */
  '@stylistic/padded-blocks'?: Linter.RuleEntry<StylisticPaddedBlocks>
  /**
   * Require or disallow padding lines between statements
   * @see https://eslint.style/rules/ts/padding-line-between-statements
   */
  '@stylistic/padding-line-between-statements'?: Linter.RuleEntry<StylisticPaddingLineBetweenStatements>
  /**
   * Require quotes around object literal, type literal, interfaces and enums property names
   * @see https://eslint.style/rules/ts/quote-props
   */
  '@stylistic/quote-props'?: Linter.RuleEntry<StylisticQuoteProps>
  /**
   * Enforce the consistent use of either backticks, double, or single quotes
   * @see https://eslint.style/rules/ts/quotes
   */
  '@stylistic/quotes'?: Linter.RuleEntry<StylisticQuotes>
  /**
   * Enforce spacing between rest and spread operators and their expressions
   * @see https://eslint.style/rules/js/rest-spread-spacing
   */
  '@stylistic/rest-spread-spacing'?: Linter.RuleEntry<StylisticRestSpreadSpacing>
  /**
   * Require or disallow semicolons instead of ASI
   * @see https://eslint.style/rules/ts/semi
   */
  '@stylistic/semi'?: Linter.RuleEntry<StylisticSemi>
  /**
   * Enforce consistent spacing before and after semicolons
   * @see https://eslint.style/rules/js/semi-spacing
   */
  '@stylistic/semi-spacing'?: Linter.RuleEntry<StylisticSemiSpacing>
  /**
   * Enforce location of semicolons
   * @see https://eslint.style/rules/js/semi-style
   */
  '@stylistic/semi-style'?: Linter.RuleEntry<StylisticSemiStyle>
  /**
   * Enforce consistent spacing before blocks
   * @see https://eslint.style/rules/ts/space-before-blocks
   */
  '@stylistic/space-before-blocks'?: Linter.RuleEntry<StylisticSpaceBeforeBlocks>
  /**
   * Enforce consistent spacing before function parenthesis
   * @see https://eslint.style/rules/ts/space-before-function-paren
   */
  '@stylistic/space-before-function-paren'?: Linter.RuleEntry<StylisticSpaceBeforeFunctionParen>
  /**
   * Enforce consistent spacing inside parentheses
   * @see https://eslint.style/rules/js/space-in-parens
   */
  '@stylistic/space-in-parens'?: Linter.RuleEntry<StylisticSpaceInParens>
  /**
   * Require spacing around infix operators
   * @see https://eslint.style/rules/ts/space-infix-ops
   */
  '@stylistic/space-infix-ops'?: Linter.RuleEntry<StylisticSpaceInfixOps>
  /**
   * Enforce consistent spacing before or after unary operators
   * @see https://eslint.style/rules/js/space-unary-ops
   */
  '@stylistic/space-unary-ops'?: Linter.RuleEntry<StylisticSpaceUnaryOps>
  /**
   * Enforce consistent spacing after the `//` or `/*` in a comment
   * @see https://eslint.style/rules/js/spaced-comment
   */
  '@stylistic/spaced-comment'?: Linter.RuleEntry<StylisticSpacedComment>
  /**
   * Enforce spacing around colons of switch statements
   * @see https://eslint.style/rules/js/switch-colon-spacing
   */
  '@stylistic/switch-colon-spacing'?: Linter.RuleEntry<StylisticSwitchColonSpacing>
  /**
   * Require or disallow spacing around embedded expressions of template strings
   * @see https://eslint.style/rules/js/template-curly-spacing
   */
  '@stylistic/template-curly-spacing'?: Linter.RuleEntry<StylisticTemplateCurlySpacing>
  /**
   * Require or disallow spacing between template tags and their literals
   * @see https://eslint.style/rules/js/template-tag-spacing
   */
  '@stylistic/template-tag-spacing'?: Linter.RuleEntry<StylisticTemplateTagSpacing>
  /**
   * Require consistent spacing around type annotations
   * @see https://eslint.style/rules/ts/type-annotation-spacing
   */
  '@stylistic/type-annotation-spacing'?: Linter.RuleEntry<StylisticTypeAnnotationSpacing>
  /**
   * Enforces consistent spacing inside TypeScript type generics
   * @see https://eslint.style/rules/plus/type-generic-spacing
   */
  '@stylistic/type-generic-spacing'?: Linter.RuleEntry<[]>
  /**
   * Expect space before the type declaration in the named tuple
   * @see https://eslint.style/rules/plus/type-named-tuple-spacing
   */
  '@stylistic/type-named-tuple-spacing'?: Linter.RuleEntry<[]>
  /**
   * Require parentheses around immediate `function` invocations
   * @see https://eslint.style/rules/js/wrap-iife
   */
  '@stylistic/wrap-iife'?: Linter.RuleEntry<StylisticWrapIife>
  /**
   * Require parenthesis around regex literals
   * @see https://eslint.style/rules/js/wrap-regex
   */
  '@stylistic/wrap-regex'?: Linter.RuleEntry<[]>
  /**
   * Require or disallow spacing around the `*` in `yield*` expressions
   * @see https://eslint.style/rules/js/yield-star-spacing
   */
  '@stylistic/yield-star-spacing'?: Linter.RuleEntry<StylisticYieldStarSpacing>
}

/* ======= Declarations ======= */
// ----- @stylistic/array-bracket-newline -----
type StylisticArrayBracketNewline = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]
// ----- @stylistic/array-bracket-spacing -----
type StylisticArrayBracketSpacing = []|[("always" | "never")]|[("always" | "never"), {
  singleValue?: boolean
  objectsInArrays?: boolean
  arraysInArrays?: boolean
}]
// ----- @stylistic/array-element-newline -----
type StylisticArrayElementNewline = []|[(_StylisticArrayElementNewlineBasicConfig | {
  ArrayExpression?: _StylisticArrayElementNewlineBasicConfig
  ArrayPattern?: _StylisticArrayElementNewlineBasicConfig
})]
type _StylisticArrayElementNewlineBasicConfig = (("always" | "never" | "consistent") | {
  consistent?: boolean
  multiline?: boolean
  minItems?: (number | null)
})
// ----- @stylistic/arrow-parens -----
type StylisticArrowParens = []|[("always" | "as-needed")]|[("always" | "as-needed"), {
  requireForBlockBody?: boolean
}]
// ----- @stylistic/arrow-spacing -----
type StylisticArrowSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- @stylistic/block-spacing -----
type StylisticBlockSpacing = []|[("always" | "never")]
// ----- @stylistic/brace-style -----
type StylisticBraceStyle = []|[("1tbs" | "stroustrup" | "allman")]|[("1tbs" | "stroustrup" | "allman"), {
  allowSingleLine?: boolean
}]
// ----- @stylistic/comma-dangle -----
type StylisticCommaDangle = []|[(_StylisticCommaDangleValue | {
  arrays?: _StylisticCommaDangleValueWithIgnore
  objects?: _StylisticCommaDangleValueWithIgnore
  imports?: _StylisticCommaDangleValueWithIgnore
  exports?: _StylisticCommaDangleValueWithIgnore
  functions?: _StylisticCommaDangleValueWithIgnore
  importAttributes?: _StylisticCommaDangleValueWithIgnore
  dynamicImports?: _StylisticCommaDangleValueWithIgnore
  enums?: _StylisticCommaDangleValueWithIgnore
  generics?: _StylisticCommaDangleValueWithIgnore
  tuples?: _StylisticCommaDangleValueWithIgnore
})]
type _StylisticCommaDangleValue = ("always-multiline" | "always" | "never" | "only-multiline")
type _StylisticCommaDangleValueWithIgnore = ("always-multiline" | "always" | "never" | "only-multiline" | "ignore")
// ----- @stylistic/comma-spacing -----
type StylisticCommaSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- @stylistic/comma-style -----
type StylisticCommaStyle = []|[("first" | "last")]|[("first" | "last"), {
  exceptions?: {
    [k: string]: boolean | undefined
  }
}]
// ----- @stylistic/computed-property-spacing -----
type StylisticComputedPropertySpacing = []|[("always" | "never")]|[("always" | "never"), {
  enforceForClassMembers?: boolean
}]
// ----- @stylistic/curly-newline -----
type StylisticCurlyNewline = []|[(("always" | "never") | {
  IfStatementConsequent?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  IfStatementAlternative?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  DoWhileStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ForInStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ForOfStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ForStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  WhileStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  SwitchStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  SwitchCase?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TryStatementBlock?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TryStatementHandler?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TryStatementFinalizer?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  BlockStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ArrowFunctionExpression?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  FunctionDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  FunctionExpression?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  Property?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ClassBody?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  StaticBlock?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  WithStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TSEnumBody?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TSInterfaceBody?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TSModuleBlock?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  multiline?: boolean
  minElements?: number
  consistent?: boolean
})]
// ----- @stylistic/dot-location -----
type StylisticDotLocation = []|[("object" | "property")]
// ----- @stylistic/eol-last -----
type StylisticEolLast = []|[("always" | "never" | "unix" | "windows")]
// ----- @stylistic/func-call-spacing -----
type StylisticFuncCallSpacing = ([]|["never"] | []|["always"]|["always", {
  allowNewlines?: boolean
  optionalChain?: {
    before?: boolean
    after?: boolean
  }
}])
// ----- @stylistic/function-call-argument-newline -----
type StylisticFunctionCallArgumentNewline = []|[("always" | "never" | "consistent")]
// ----- @stylistic/function-call-spacing -----
type StylisticFunctionCallSpacing = ([]|["never"] | []|["always"]|["always", {
  allowNewlines?: boolean
  optionalChain?: {
    before?: boolean
    after?: boolean
  }
}])
// ----- @stylistic/function-paren-newline -----
type StylisticFunctionParenNewline = []|[(("always" | "never" | "consistent" | "multiline" | "multiline-arguments") | {
  minItems?: number
})]
// ----- @stylistic/generator-star-spacing -----
type StylisticGeneratorStarSpacing = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
  named?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  anonymous?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  method?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
})]
// ----- @stylistic/implicit-arrow-linebreak -----
type StylisticImplicitArrowLinebreak = []|[("beside" | "below")]
// ----- @stylistic/indent -----
type StylisticIndent = []|[("tab" | number)]|[("tab" | number), {
  SwitchCase?: number
  VariableDeclarator?: ((number | ("first" | "off")) | {
    var?: (number | ("first" | "off"))
    let?: (number | ("first" | "off"))
    const?: (number | ("first" | "off"))
  })
  outerIIFEBody?: (number | "off")
  MemberExpression?: (number | "off")
  FunctionDeclaration?: {
    parameters?: (number | ("first" | "off"))
    body?: number
  }
  FunctionExpression?: {
    parameters?: (number | ("first" | "off"))
    body?: number
  }
  StaticBlock?: {
    body?: number
  }
  CallExpression?: {
    arguments?: (number | ("first" | "off"))
  }
  ArrayExpression?: (number | ("first" | "off"))
  ObjectExpression?: (number | ("first" | "off"))
  ImportDeclaration?: (number | ("first" | "off"))
  flatTernaryExpressions?: boolean
  offsetTernaryExpressions?: boolean
  offsetTernaryExpressionsOffsetCallExpressions?: boolean
  ignoredNodes?: string[]
  ignoreComments?: boolean
  tabLength?: number
}]
// ----- @stylistic/indent-binary-ops -----
type StylisticIndentBinaryOps = []|[(number | "tab")]
// ----- @stylistic/jsx-closing-bracket-location -----
type StylisticJsxClosingBracketLocation = []|[(("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | {
  location?: ("after-props" | "props-aligned" | "tag-aligned" | "line-aligned")
} | {
  nonEmpty?: (("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | false)
  selfClosing?: (("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | false)
})]
// ----- @stylistic/jsx-closing-tag-location -----
type StylisticJsxClosingTagLocation = []|[("tag-aligned" | "line-aligned")]
// ----- @stylistic/jsx-curly-brace-presence -----
type StylisticJsxCurlyBracePresence = []|[({
  props?: ("always" | "never" | "ignore")
  children?: ("always" | "never" | "ignore")
  propElementValues?: ("always" | "never" | "ignore")
} | ("always" | "never" | "ignore"))]
// ----- @stylistic/jsx-curly-newline -----
type StylisticJsxCurlyNewline = []|[(("consistent" | "never") | {
  singleline?: ("consistent" | "require" | "forbid")
  multiline?: ("consistent" | "require" | "forbid")
})]
// ----- @stylistic/jsx-curly-spacing -----
type StylisticJsxCurlySpacing = []|[((_StylisticJsxCurlySpacing_BasicConfig & {
  attributes?: _StylisticJsxCurlySpacingBasicConfigOrBoolean
  children?: _StylisticJsxCurlySpacingBasicConfigOrBoolean
  [k: string]: unknown | undefined
}) | ("always" | "never"))]|[((_StylisticJsxCurlySpacing_BasicConfig & {
  attributes?: _StylisticJsxCurlySpacingBasicConfigOrBoolean
  children?: _StylisticJsxCurlySpacingBasicConfigOrBoolean
  [k: string]: unknown | undefined
}) | ("always" | "never")), {
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
    [k: string]: unknown | undefined
  }
}]
type _StylisticJsxCurlySpacingBasicConfigOrBoolean = (_StylisticJsxCurlySpacing_BasicConfig | boolean)
interface _StylisticJsxCurlySpacing_BasicConfig {
  when?: ("always" | "never")
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
    [k: string]: unknown | undefined
  }
  [k: string]: unknown | undefined
}
// ----- @stylistic/jsx-equals-spacing -----
type StylisticJsxEqualsSpacing = []|[("always" | "never")]
// ----- @stylistic/jsx-first-prop-new-line -----
type StylisticJsxFirstPropNewLine = []|[("always" | "never" | "multiline" | "multiline-multiprop" | "multiprop")]
// ----- @stylistic/jsx-function-call-newline -----
type StylisticJsxFunctionCallNewline = []|[("always" | "multiline")]
// ----- @stylistic/jsx-indent -----
type StylisticJsxIndent = []|[("tab" | number)]|[("tab" | number), {
  checkAttributes?: boolean
  indentLogicalExpressions?: boolean
}]
// ----- @stylistic/jsx-indent-props -----
type StylisticJsxIndentProps = []|[(("tab" | "first") | number | {
  indentMode?: (("tab" | "first") | number)
  ignoreTernaryOperator?: boolean
  [k: string]: unknown | undefined
})]
// ----- @stylistic/jsx-max-props-per-line -----
type StylisticJsxMaxPropsPerLine = []|[({
  maximum?: {
    single?: number
    multi?: number
    [k: string]: unknown | undefined
  }
} | {
  maximum?: number
  when?: ("always" | "multiline")
})]
// ----- @stylistic/jsx-newline -----
type StylisticJsxNewline = []|[{
  prevent?: boolean
  allowMultilines?: boolean
}]
// ----- @stylistic/jsx-one-expression-per-line -----
type StylisticJsxOneExpressionPerLine = []|[{
  allow?: ("none" | "literal" | "single-child" | "single-line" | "non-jsx")
}]
// ----- @stylistic/jsx-pascal-case -----
type StylisticJsxPascalCase = []|[{
  allowAllCaps?: boolean
  allowLeadingUnderscore?: boolean
  allowNamespace?: boolean
  ignore?: string[]
}]
// ----- @stylistic/jsx-quotes -----
type StylisticJsxQuotes = []|[("prefer-single" | "prefer-double")]
// ----- @stylistic/jsx-self-closing-comp -----
type StylisticJsxSelfClosingComp = []|[{
  component?: boolean
  html?: boolean
}]
// ----- @stylistic/jsx-sort-props -----
type StylisticJsxSortProps = []|[{
  callbacksLast?: boolean
  shorthandFirst?: boolean
  shorthandLast?: boolean
  multiline?: ("ignore" | "first" | "last")
  ignoreCase?: boolean
  noSortAlphabetically?: boolean
  reservedFirst?: (unknown[] | boolean)
  locale?: string
}]
// ----- @stylistic/jsx-tag-spacing -----
type StylisticJsxTagSpacing = []|[{
  closingSlash?: ("always" | "never" | "allow")
  beforeSelfClosing?: ("always" | "proportional-always" | "never" | "allow")
  afterOpening?: ("always" | "allow-multiline" | "never" | "allow")
  beforeClosing?: ("always" | "proportional-always" | "never" | "allow")
}]
// ----- @stylistic/jsx-wrap-multilines -----
type StylisticJsxWrapMultilines = []|[{
  declaration?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  assignment?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  return?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  arrow?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  condition?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  logical?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  prop?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  propertyValue?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
}]
// ----- @stylistic/key-spacing -----
type StylisticKeySpacing = []|[({
  align?: (("colon" | "value") | {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  })
  mode?: ("strict" | "minimum")
  beforeColon?: boolean
  afterColon?: boolean
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    align?: (("colon" | "value") | {
      mode?: ("strict" | "minimum")
      on?: ("colon" | "value")
      beforeColon?: boolean
      afterColon?: boolean
    })
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  align?: {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  }
})]
// ----- @stylistic/keyword-spacing -----
type StylisticKeywordSpacing = []|[{
  before?: boolean
  after?: boolean
  overrides?: {
    abstract?: {
      before?: boolean
      after?: boolean
    }
    as?: {
      before?: boolean
      after?: boolean
    }
    async?: {
      before?: boolean
      after?: boolean
    }
    await?: {
      before?: boolean
      after?: boolean
    }
    boolean?: {
      before?: boolean
      after?: boolean
    }
    break?: {
      before?: boolean
      after?: boolean
    }
    byte?: {
      before?: boolean
      after?: boolean
    }
    case?: {
      before?: boolean
      after?: boolean
    }
    catch?: {
      before?: boolean
      after?: boolean
    }
    char?: {
      before?: boolean
      after?: boolean
    }
    class?: {
      before?: boolean
      after?: boolean
    }
    const?: {
      before?: boolean
      after?: boolean
    }
    continue?: {
      before?: boolean
      after?: boolean
    }
    debugger?: {
      before?: boolean
      after?: boolean
    }
    default?: {
      before?: boolean
      after?: boolean
    }
    delete?: {
      before?: boolean
      after?: boolean
    }
    do?: {
      before?: boolean
      after?: boolean
    }
    double?: {
      before?: boolean
      after?: boolean
    }
    else?: {
      before?: boolean
      after?: boolean
    }
    enum?: {
      before?: boolean
      after?: boolean
    }
    export?: {
      before?: boolean
      after?: boolean
    }
    extends?: {
      before?: boolean
      after?: boolean
    }
    false?: {
      before?: boolean
      after?: boolean
    }
    final?: {
      before?: boolean
      after?: boolean
    }
    finally?: {
      before?: boolean
      after?: boolean
    }
    float?: {
      before?: boolean
      after?: boolean
    }
    for?: {
      before?: boolean
      after?: boolean
    }
    from?: {
      before?: boolean
      after?: boolean
    }
    function?: {
      before?: boolean
      after?: boolean
    }
    get?: {
      before?: boolean
      after?: boolean
    }
    goto?: {
      before?: boolean
      after?: boolean
    }
    if?: {
      before?: boolean
      after?: boolean
    }
    implements?: {
      before?: boolean
      after?: boolean
    }
    import?: {
      before?: boolean
      after?: boolean
    }
    in?: {
      before?: boolean
      after?: boolean
    }
    instanceof?: {
      before?: boolean
      after?: boolean
    }
    int?: {
      before?: boolean
      after?: boolean
    }
    interface?: {
      before?: boolean
      after?: boolean
    }
    let?: {
      before?: boolean
      after?: boolean
    }
    long?: {
      before?: boolean
      after?: boolean
    }
    native?: {
      before?: boolean
      after?: boolean
    }
    new?: {
      before?: boolean
      after?: boolean
    }
    null?: {
      before?: boolean
      after?: boolean
    }
    of?: {
      before?: boolean
      after?: boolean
    }
    package?: {
      before?: boolean
      after?: boolean
    }
    private?: {
      before?: boolean
      after?: boolean
    }
    protected?: {
      before?: boolean
      after?: boolean
    }
    public?: {
      before?: boolean
      after?: boolean
    }
    return?: {
      before?: boolean
      after?: boolean
    }
    satisfies?: {
      before?: boolean
      after?: boolean
    }
    set?: {
      before?: boolean
      after?: boolean
    }
    short?: {
      before?: boolean
      after?: boolean
    }
    static?: {
      before?: boolean
      after?: boolean
    }
    super?: {
      before?: boolean
      after?: boolean
    }
    switch?: {
      before?: boolean
      after?: boolean
    }
    synchronized?: {
      before?: boolean
      after?: boolean
    }
    this?: {
      before?: boolean
      after?: boolean
    }
    throw?: {
      before?: boolean
      after?: boolean
    }
    throws?: {
      before?: boolean
      after?: boolean
    }
    transient?: {
      before?: boolean
      after?: boolean
    }
    true?: {
      before?: boolean
      after?: boolean
    }
    try?: {
      before?: boolean
      after?: boolean
    }
    typeof?: {
      before?: boolean
      after?: boolean
    }
    var?: {
      before?: boolean
      after?: boolean
    }
    void?: {
      before?: boolean
      after?: boolean
    }
    volatile?: {
      before?: boolean
      after?: boolean
    }
    while?: {
      before?: boolean
      after?: boolean
    }
    with?: {
      before?: boolean
      after?: boolean
    }
    yield?: {
      before?: boolean
      after?: boolean
    }
    type?: {
      before?: boolean
      after?: boolean
    }
  }
}]
// ----- @stylistic/line-comment-position -----
type StylisticLineCommentPosition = []|[(("above" | "beside") | {
  position?: ("above" | "beside")
  ignorePattern?: string
  applyDefaultPatterns?: boolean
  applyDefaultIgnorePatterns?: boolean
})]
// ----- @stylistic/linebreak-style -----
type StylisticLinebreakStyle = []|[("unix" | "windows")]
// ----- @stylistic/lines-around-comment -----
type StylisticLinesAroundComment = []|[{
  beforeBlockComment?: boolean
  afterBlockComment?: boolean
  beforeLineComment?: boolean
  afterLineComment?: boolean
  allowBlockStart?: boolean
  allowBlockEnd?: boolean
  allowClassStart?: boolean
  allowClassEnd?: boolean
  allowObjectStart?: boolean
  allowObjectEnd?: boolean
  allowArrayStart?: boolean
  allowArrayEnd?: boolean
  allowInterfaceStart?: boolean
  allowInterfaceEnd?: boolean
  allowTypeStart?: boolean
  allowTypeEnd?: boolean
  allowEnumStart?: boolean
  allowEnumEnd?: boolean
  allowModuleStart?: boolean
  allowModuleEnd?: boolean
  ignorePattern?: string
  applyDefaultIgnorePatterns?: boolean
  afterHashbangComment?: boolean
}]
// ----- @stylistic/lines-between-class-members -----
type StylisticLinesBetweenClassMembers = []|[({
  
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never"))]|[({
  
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never")), {
  exceptAfterSingleLine?: boolean
  exceptAfterOverload?: boolean
}]
// ----- @stylistic/max-len -----
type StylisticMaxLen = []|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number)]|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), ({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number)]|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), ({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), {
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
}]
// ----- @stylistic/max-statements-per-line -----
type StylisticMaxStatementsPerLine = []|[{
  max?: number
  ignoredNodes?: ("BreakStatement" | "ClassDeclaration" | "ContinueStatement" | "DebuggerStatement" | "DoWhileStatement" | "ExpressionStatement" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "IfStatement" | "ImportDeclaration" | "LabeledStatement" | "ReturnStatement" | "SwitchStatement" | "ThrowStatement" | "TryStatement" | "VariableDeclaration" | "WhileStatement" | "WithStatement" | "ExportNamedDeclaration" | "ExportDefaultDeclaration" | "ExportAllDeclaration")[]
}]
// ----- @stylistic/member-delimiter-style -----
type StylisticMemberDelimiterStyle = []|[{
  multiline?: {
    delimiter?: ("none" | "semi" | "comma")
    requireLast?: boolean
  }
  singleline?: {
    delimiter?: ("semi" | "comma")
    requireLast?: boolean
  }
  overrides?: {
    interface?: _StylisticMemberDelimiterStyle_DelimiterConfig
    typeLiteral?: _StylisticMemberDelimiterStyle_DelimiterConfig
  }
  multilineDetection?: ("brackets" | "last-member")
}]
interface _StylisticMemberDelimiterStyle_DelimiterConfig {
  multiline?: {
    delimiter?: ("none" | "semi" | "comma")
    requireLast?: boolean
  }
  singleline?: {
    delimiter?: ("semi" | "comma")
    requireLast?: boolean
  }
}
// ----- @stylistic/multiline-comment-style -----
type StylisticMultilineCommentStyle = ([]|[("starred-block" | "bare-block")] | []|["separate-lines"]|["separate-lines", {
  checkJSDoc?: boolean
}])
// ----- @stylistic/multiline-ternary -----
type StylisticMultilineTernary = []|[("always" | "always-multiline" | "never")]|[("always" | "always-multiline" | "never"), {
  ignoreJSX?: boolean
  [k: string]: unknown | undefined
}]
// ----- @stylistic/new-parens -----
type StylisticNewParens = []|[("always" | "never")]
// ----- @stylistic/newline-per-chained-call -----
type StylisticNewlinePerChainedCall = []|[{
  ignoreChainWithDepth?: number
}]
// ----- @stylistic/no-confusing-arrow -----
type StylisticNoConfusingArrow = []|[{
  allowParens?: boolean
  onlyOneSimpleParam?: boolean
}]
// ----- @stylistic/no-extra-parens -----
type StylisticNoExtraParens = ([]|["functions"] | []|["all"]|["all", {
  conditionalAssign?: boolean
  ternaryOperandBinaryExpressions?: boolean
  nestedBinaryExpressions?: boolean
  returnAssign?: boolean
  ignoreJSX?: ("none" | "all" | "single-line" | "multi-line")
  enforceForArrowConditionals?: boolean
  enforceForSequenceExpressions?: boolean
  enforceForNewInMemberExpressions?: boolean
  enforceForFunctionPrototypeMethods?: boolean
  allowParensAfterCommentPattern?: string
}])
// ----- @stylistic/no-mixed-operators -----
type StylisticNoMixedOperators = []|[{
  groups?: [("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ...(("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"))[]][]
  allowSamePrecedence?: boolean
}]
// ----- @stylistic/no-mixed-spaces-and-tabs -----
type StylisticNoMixedSpacesAndTabs = []|[("smart-tabs" | boolean)]
// ----- @stylistic/no-multi-spaces -----
type StylisticNoMultiSpaces = []|[{
  exceptions?: {
    [k: string]: boolean
  }
  ignoreEOLComments?: boolean
  includeTabs?: boolean
}]
// ----- @stylistic/no-multiple-empty-lines -----
type StylisticNoMultipleEmptyLines = []|[{
  max: number
  maxEOF?: number
  maxBOF?: number
}]
// ----- @stylistic/no-tabs -----
type StylisticNoTabs = []|[{
  allowIndentationTabs?: boolean
}]
// ----- @stylistic/no-trailing-spaces -----
type StylisticNoTrailingSpaces = []|[{
  skipBlankLines?: boolean
  ignoreComments?: boolean
}]
// ----- @stylistic/nonblock-statement-body-position -----
type StylisticNonblockStatementBodyPosition = []|[("beside" | "below" | "any")]|[("beside" | "below" | "any"), {
  overrides?: {
    if?: ("beside" | "below" | "any")
    else?: ("beside" | "below" | "any")
    while?: ("beside" | "below" | "any")
    do?: ("beside" | "below" | "any")
    for?: ("beside" | "below" | "any")
  }
}]
// ----- @stylistic/object-curly-newline -----
type StylisticObjectCurlyNewline = []|[((("always" | "never") | {
  multiline?: boolean
  minProperties?: number
  consistent?: boolean
}) | {
  ObjectExpression?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ObjectPattern?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ImportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ExportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  TSTypeLiteral?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  TSInterfaceBody?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
})]
// ----- @stylistic/object-curly-spacing -----
type StylisticObjectCurlySpacing = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
}]
// ----- @stylistic/object-property-newline -----
type StylisticObjectPropertyNewline = []|[{
  allowAllPropertiesOnSameLine?: boolean
  allowMultiplePropertiesPerLine?: boolean
}]
// ----- @stylistic/one-var-declaration-per-line -----
type StylisticOneVarDeclarationPerLine = []|[("always" | "initializations")]
// ----- @stylistic/operator-linebreak -----
type StylisticOperatorLinebreak = []|[(("after" | "before" | "none") | null)]|[(("after" | "before" | "none") | null), {
  overrides?: {
    [k: string]: ("after" | "before" | "none" | "ignore") | undefined
  }
}]
// ----- @stylistic/padded-blocks -----
type StylisticPaddedBlocks = []|[(("always" | "never") | {
  blocks?: ("always" | "never")
  switches?: ("always" | "never")
  classes?: ("always" | "never")
})]|[(("always" | "never") | {
  blocks?: ("always" | "never")
  switches?: ("always" | "never")
  classes?: ("always" | "never")
}), {
  allowSingleLineBlocks?: boolean
}]
// ----- @stylistic/padding-line-between-statements -----
type _StylisticPaddingLineBetweenStatementsPaddingType = ("any" | "never" | "always")
type _StylisticPaddingLineBetweenStatementsStatementType = (("*" | "block-like" | "exports" | "require" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-export" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-export" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "ts-method" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with" | "cjs-export" | "cjs-import" | "enum" | "interface" | "type" | "function-overload") | [("*" | "block-like" | "exports" | "require" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-export" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-export" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "ts-method" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with" | "cjs-export" | "cjs-import" | "enum" | "interface" | "type" | "function-overload"), ...(("*" | "block-like" | "exports" | "require" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-export" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-export" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "ts-method" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with" | "cjs-export" | "cjs-import" | "enum" | "interface" | "type" | "function-overload"))[]])
type StylisticPaddingLineBetweenStatements = {
  blankLine: _StylisticPaddingLineBetweenStatementsPaddingType
  prev: _StylisticPaddingLineBetweenStatementsStatementType
  next: _StylisticPaddingLineBetweenStatementsStatementType
}[]
// ----- @stylistic/quote-props -----
type StylisticQuoteProps = ([]|[("always" | "as-needed" | "consistent" | "consistent-as-needed")] | []|[("always" | "as-needed" | "consistent" | "consistent-as-needed")]|[("always" | "as-needed" | "consistent" | "consistent-as-needed"), {
  keywords?: boolean
  unnecessary?: boolean
  numbers?: boolean
}])
// ----- @stylistic/quotes -----
type StylisticQuotes = []|[("single" | "double" | "backtick")]|[("single" | "double" | "backtick"), ("avoid-escape" | {
  avoidEscape?: boolean
  allowTemplateLiterals?: boolean
  ignoreStringLiterals?: boolean
})]
// ----- @stylistic/rest-spread-spacing -----
type StylisticRestSpreadSpacing = []|[("always" | "never")]
// ----- @stylistic/semi -----
type StylisticSemi = ([]|["never"]|["never", {
  beforeStatementContinuationChars?: ("always" | "any" | "never")
}] | []|["always"]|["always", {
  omitLastInOneLineBlock?: boolean
  omitLastInOneLineClassBody?: boolean
}])
// ----- @stylistic/semi-spacing -----
type StylisticSemiSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- @stylistic/semi-style -----
type StylisticSemiStyle = []|[("last" | "first")]
// ----- @stylistic/space-before-blocks -----
type StylisticSpaceBeforeBlocks = []|[(("always" | "never") | {
  keywords?: ("always" | "never" | "off")
  functions?: ("always" | "never" | "off")
  classes?: ("always" | "never" | "off")
})]
// ----- @stylistic/space-before-function-paren -----
type StylisticSpaceBeforeFunctionParen = []|[(("always" | "never") | {
  anonymous?: ("always" | "never" | "ignore")
  named?: ("always" | "never" | "ignore")
  asyncArrow?: ("always" | "never" | "ignore")
})]
// ----- @stylistic/space-in-parens -----
type StylisticSpaceInParens = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: ("{}" | "[]" | "()" | "empty")[]
}]
// ----- @stylistic/space-infix-ops -----
type StylisticSpaceInfixOps = []|[{
  int32Hint?: boolean
}]
// ----- @stylistic/space-unary-ops -----
type StylisticSpaceUnaryOps = []|[{
  words?: boolean
  nonwords?: boolean
  overrides?: {
    [k: string]: boolean | undefined
  }
}]
// ----- @stylistic/spaced-comment -----
type StylisticSpacedComment = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: string[]
  markers?: string[]
  line?: {
    exceptions?: string[]
    markers?: string[]
  }
  block?: {
    exceptions?: string[]
    markers?: string[]
    balanced?: boolean
  }
}]
// ----- @stylistic/switch-colon-spacing -----
type StylisticSwitchColonSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- @stylistic/template-curly-spacing -----
type StylisticTemplateCurlySpacing = []|[("always" | "never")]
// ----- @stylistic/template-tag-spacing -----
type StylisticTemplateTagSpacing = []|[("always" | "never")]
// ----- @stylistic/type-annotation-spacing -----
type StylisticTypeAnnotationSpacing = []|[{
  before?: boolean
  after?: boolean
  overrides?: {
    colon?: _StylisticTypeAnnotationSpacing_SpacingConfig
    arrow?: _StylisticTypeAnnotationSpacing_SpacingConfig
    variable?: _StylisticTypeAnnotationSpacing_SpacingConfig
    parameter?: _StylisticTypeAnnotationSpacing_SpacingConfig
    property?: _StylisticTypeAnnotationSpacing_SpacingConfig
    returnType?: _StylisticTypeAnnotationSpacing_SpacingConfig
  }
}]
interface _StylisticTypeAnnotationSpacing_SpacingConfig {
  before?: boolean
  after?: boolean
}
// ----- @stylistic/wrap-iife -----
type StylisticWrapIife = []|[("outside" | "inside" | "any")]|[("outside" | "inside" | "any"), {
  functionPrototypeMethods?: boolean
}]
// ----- @stylistic/yield-star-spacing -----
type StylisticYieldStarSpacing = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
})]