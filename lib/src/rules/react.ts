import type { RuleOptions as ReactRules } from "../types/react"
import type { Linter } from "eslint"
import type { PluginConfig } from "../utils"

export type {
    ReactRules
}

export const reactRecommended: ReactRules = {}

export default function reactRules({ rules, files }: PluginConfig<ReactRules>) {
    return ({ files, rules: Object.assign({}, reactRecommended, rules) }) as Linter.Config
}
