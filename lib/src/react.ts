import type { ReactOverrides } from "./plugins/react"
import type { ReactRules } from "./rules/react"
import type { Linter } from "eslint"

import plugin from "./plugins/react"
import reactRules from "./rules/react"
import { combine } from "./utils"

interface ReactConfig extends ReactOverrides {
    rules?: ReactRules
}

export default function react(config?: ReactConfig): Promise<Linter.Config[]> {
    return combine(
        plugin(config),
        reactRules(config)
    )
}

export type { ReactConfig, ReactOverrides, ReactRules }
export { plugin as react, reactRules }
