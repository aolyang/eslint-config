import type { Linter } from "eslint"
import type { RuleOptions as SvelteRules } from "../types/svelte"
import type { PluginConfig } from "../utils"

import { globSvelte } from "../plugins/svelte"

export type {
    SvelteRules
}

export const svelteRecommended: SvelteRules = {}

export default function svelteRules({ rules, files = [globSvelte] }: PluginConfig<SvelteRules> = {}) {
    return ({ files, rules: Object.assign({}, svelteRecommended, rules) }) as Linter.Config
}
