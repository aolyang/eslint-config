import type { ReactOverrides } from "./plugins/react"
import plugin from "./plugins/react"
import type { ReactRules } from "./rules/react"
import reactRules from "./rules/react"
import type { Linter } from "eslint"
import { combine } from "./utils"

interface ReactConfig extends ReactOverrides {
    rules?: ReactRules
}

export default function react(config?: ReactConfig): Promise<Linter.Config[]> {
    const { rules, files, ...overrides } = config ?? {}
    return combine(
        plugin({ files, ...overrides}),
        reactRules({ rules, files })
    )
}

export type { ReactConfig, ReactOverrides, ReactRules }
export { plugin as react, reactRules }
