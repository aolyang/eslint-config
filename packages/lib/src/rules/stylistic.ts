import type { Linter } from "eslint"
import type { RuleOptions as StylisticRules } from "../types/stylistic"

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

// TODO figure out how to avoid force type assertion, why module declare is not working?
export const stylisticRules = (rules?: StylisticRules) =>
    ({ rules: Object.assign({}, stylisticRecommended, rules) }) as Pick<Linter.Config, "rules">
