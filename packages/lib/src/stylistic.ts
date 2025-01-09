import { StylisticOverrides } from "./plugins/stylistic"
import { Linter } from "eslint"
import { combine } from "./utils"
import plugin from "./plugins/stylistic"
import stylisticRules, { StylisticRules } from "./rules/stylistic"

interface StylisticConfig extends StylisticOverrides {
    rules?: StylisticRules
}

export default function stylistic(config?: StylisticConfig): Promise<Linter.Config[]> {
    const { rules, ...overrides } = config ?? {}
    return combine(
        plugin(overrides),
        stylisticRules(rules)
    )
}


export { plugin as stylistic, stylisticRules }
export type { StylisticConfig, StylisticRules, StylisticOverrides }
