import type { Linter } from "eslint"
import type { RuleOptions as ReactRules } from "../types/react"
import type { PluginConfig } from "../utils"

import { globReact } from "../plugins/react"

export type {
    ReactRules
}

export const reactRecommended: ReactRules = {}

export default function reactRules({ rules, files = [globReact] }: PluginConfig<ReactRules> = {}) {
    return ({ files, rules: Object.assign({}, reactRecommended, rules) }) as Linter.Config
}
