import plugin, { TypeScriptOverrides } from "./plugins/typescript"
import typescriptRules, { TypeScriptRules } from "./rules/typescript"
import type { Linter } from "eslint"
import { combine } from "./utils"

interface TypeScriptConfig extends TypeScriptOverrides {
    rules?: TypeScriptRules
}

export default function typescript(config?: TypeScriptConfig): Promise<Linter.Config[]> {
    const { rules, ...overrides } = config ?? {}
    return combine(
        plugin(overrides),
        typescriptRules(rules)
    )
}

export type { TypeScriptConfig, TypeScriptRules, TypeScriptOverrides }
export { plugin as typescript, typescriptRules }
