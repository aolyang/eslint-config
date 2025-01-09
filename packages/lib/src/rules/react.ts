import type { RuleOptions as ReactRules } from "../types/react"
import type { Linter } from "eslint"

export type {
    ReactRules
}

export const reactRecommended: ReactRules = {}

export default function reactRules(rules?: ReactRules) {
    return ({ rules: Object.assign({}, reactRecommended, rules) }) as Linter.Config
}
