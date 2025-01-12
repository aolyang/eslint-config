import type { TypeScriptOverrides } from "./plugins/typescript"
import plugin from "./plugins/typescript"
import type { TypeScriptRules } from "./rules/typescript"
import typescriptRules from "./rules/typescript"
import type { Linter } from "eslint"
import type { PluginConfig } from "./utils"
import { combine } from "./utils"

interface TypeScriptConfig extends TypeScriptOverrides, PluginConfig<TypeScriptRules> {
}

export default function typescript(config?: TypeScriptConfig): Promise<Linter.Config[]> {
    const { rules, files, ...overrides } = config ?? {}
    return combine(
        plugin({ files, ...overrides}),
        typescriptRules({ rules, files})
    )
}

export type { TypeScriptConfig, TypeScriptRules, TypeScriptOverrides }
export { plugin as typescript, typescriptRules }
