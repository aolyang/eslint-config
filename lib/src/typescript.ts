import type { TypeScriptOverrides } from "./plugins/typescript"
import type { TypeScriptRules } from "./rules/typescript"
import type { PluginConfig } from "./utils"
import type { Linter } from "eslint"

import plugin from "./plugins/typescript"
import typescriptRules from "./rules/typescript"
import { combine } from "./utils"

interface TypeScriptConfig extends TypeScriptOverrides, PluginConfig<TypeScriptRules> {
}

export default function typescript(config?: TypeScriptConfig): Promise<Linter.Config[]> {
    return combine(
        plugin(config),
        typescriptRules(config)
    )
}

export type { TypeScriptConfig, TypeScriptRules, TypeScriptOverrides }
export { plugin as typescript, typescriptRules }
