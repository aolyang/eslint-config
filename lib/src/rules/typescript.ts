import type { RuleOptions as TypeScriptRules } from "../types/typescript"
import type { Linter } from "eslint"

export type {
    TypeScriptRules
}

export const typescriptRecommended: TypeScriptRules = {}

export default function typescriptRules(rules?: TypeScriptRules) {
    return ({ rules: Object.assign({}, typescriptRecommended, rules) }) as Linter.Config
}