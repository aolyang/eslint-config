import type { RuleOptions as TypeScriptRules } from "../types/typescript"
import type { PluginConfig } from "../utils"
import type { Linter } from "eslint"

import { globTypeScript } from "../plugins/typescript"

export type {
    TypeScriptRules
}

export const typescriptRecommended: TypeScriptRules = {
    "@typescript-eslint/consistent-type-imports": [
        "error",
        {
            prefer: "type-imports",
            fixStyle: "separate-type-imports"
        }
    ]
}

export default function typescriptRules({ rules, files = [globTypeScript] }: PluginConfig<TypeScriptRules> = {}) {
    return ({ files, rules: Object.assign({}, typescriptRecommended, rules) }) as Linter.Config
}
