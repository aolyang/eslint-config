import type { StylisticOverrides } from "./plugins/stylistic"
import type { Linter } from "eslint"
import type { PluginConfig } from "./utils"
import { combine } from "./utils"
import plugin from "./plugins/stylistic"
import type { StylisticRules } from "./rules/stylistic"
import stylisticRules from "./rules/stylistic"

interface StylisticConfig extends StylisticOverrides, PluginConfig<StylisticRules> {
}

export default function stylistic(config?: StylisticConfig): Promise<Linter.Config[]> {
    const { rules, files, ...overrides } = config ?? {}
    return combine(
        plugin({ files, ...overrides }),
        stylisticRules({ files, rules })
    )
}


export { plugin as stylistic, stylisticRules }
export type { StylisticConfig, StylisticRules, StylisticOverrides }
