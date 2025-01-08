import type { RuleOptions as ReactRules } from "../types/react"

export type {
    ReactRules
}

export const reactRecommended: ReactRules = {

}

export const reactRules = (rules?: ReactRules) =>
    ({ rules: Object.assign({}, reactRecommended, rules) })
