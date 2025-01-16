import type { Linter } from "eslint"
import type { RuleOptions as VueRules } from "../types/vue"
import type { PluginConfig } from "../utils"

import { globVue } from "../plugins/vue"

export type {
    VueRules
}

export const vueRecommended: VueRules = {}

export default function vueRules({ rules, files = [globVue] }: PluginConfig<VueRules> = {}) {
    return ({ files, rules: Object.assign({}, vueRecommended, rules) }) as Linter.Config
}
