import plugin, { ReactOverrides } from "./plugins/react"
import reactRules, { ReactRules } from "./rules/react"
import { Linter } from "eslint";
import { combine } from "./utils";

interface ReactConfig extends ReactOverrides {
    rules?: ReactRules
}

export default function react(config?: ReactConfig): Promise<Linter.Config[]> {
    const { rules, ...overrides } = config ?? {}
    return combine(
        plugin(overrides),
        reactRules(rules)
    )
}

export type { ReactConfig, ReactOverrides, ReactRules }
export { plugin as react, reactRules }