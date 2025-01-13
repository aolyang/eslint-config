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
    "@stylistic/linebreak-style": ["error", "unix"],
    "@stylistic/no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
    "@stylistic/eol-last": ["error", "always"],
    "@stylistic/no-trailing-spaces": ["error"],
    "@stylistic/no-multi-spaces": ["error", {
        exceptions: {
            Property: true,
            VariableDeclarator: true,
            ImportDeclaration: true
        }
    }]
}

export default function stylisticRules({ rules, files = [globStylistic] }: PluginConfig<StylisticRules> = {}) {
    return ({ files, rules: Object.assign({}, stylisticRecommended, rules) }) as Linter.Config
}
