import type { RuleOptions as StylisticRules } from "../types/stylistic"
import type { PluginConfig } from "../utils"
import type { Linter } from "eslint"

import { globStylistic } from "../plugins/stylistic"

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

export default function stylisticRules({ rules, files = [globStylistic] }: PluginConfig<StylisticRules> = {}) {
    return ({ files, rules: Object.assign({}, stylisticRecommended, rules) }) as Linter.Config
}
