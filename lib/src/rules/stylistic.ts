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

export default function stylisticRules (rules?: StylisticRules) {
    return ({ rules: Object.assign({}, stylisticRecommended, rules) }) as Linter.Config
}
