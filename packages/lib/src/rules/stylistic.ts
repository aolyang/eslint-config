import type { RuleOptions as StylisticRules } from "../types/stylistic"
import type { Linter } from "eslint"

export type {
    StylisticRules
}

export const stylisticRecommended: StylisticRules = {
    "@stylistic/indent": ["error", 4],
    "@stylistic/quotes": ["error", "double"],
    "@stylistic/semi": ["error", "never"],
    "@stylistic/comma-dangle": ["error", "never"],
    "@stylistic/linebreak-style": ["error", "unix"]
}

export const stylisticRules = (rules?: StylisticRules) =>
    ({ rules: Object.assign({}, stylisticRecommended, rules) }) as Linter.Config
