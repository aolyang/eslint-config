import type { Linter } from "eslint"
import type { StylisticOverrides } from "./plugins/stylistic"
import type { StylisticRules } from "./rules/stylistic"
import type { PluginConfig } from "./utils"

import plugin from "./plugins/stylistic"
import stylisticRules from "./rules/stylistic"
import { combine } from "./utils"

interface StylisticConfig extends StylisticOverrides, PluginConfig<StylisticRules> {
}

export default function stylistic(config?: StylisticConfig): Promise<Linter.Config[]> {
    return combine(
        plugin(config),
        stylisticRules(config)
    )
}

export { plugin as stylistic, stylisticRules }
export type { StylisticConfig, StylisticRules, StylisticOverrides }
