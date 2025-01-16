import type { SvelteOverrides } from "./plugins/svelte"
import type { SvelteRules } from "./rules/svelte"
import type { Linter } from "eslint"

import plugin from "./plugins/svelte"
import svelteRules from "./rules/svelte"
import { combine } from "./utils"

interface SvelteConfig extends SvelteOverrides {
    rules?: SvelteRules
}

export default function svelte(config?: SvelteConfig): Promise<Linter.Config[]> {
    return combine(
        plugin(config),
        svelteRules(config)
    )
}

export type { SvelteConfig, SvelteOverrides, SvelteRules }
export { plugin as svelte, svelteRules }
