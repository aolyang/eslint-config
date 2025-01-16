import type { Linter } from "eslint"
import type { VueOverrides } from "./plugins/vue"
import type { VueRules } from "./rules/vue"

import plugin from "./plugins/vue"
import vueRules from "./rules/vue"
import { combine } from "./utils"

interface VueConfig extends VueOverrides {
    rules?: VueRules
}

export default function vue(config?: VueConfig): Promise<Linter.Config[]> {
    return combine(
        plugin(config),
        vueRules(config)
    )
}

export type { VueConfig, VueOverrides, VueRules }
export { plugin as vue, vueRules }
