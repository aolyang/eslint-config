import globals from "globals"

import { combine, ignores, combineGlobals } from "@aolyang/eslint-config"
import stylistic from "@aolyang/eslint-config/stylistic"
import typescript from "@aolyang/eslint-config/typescript"

export default combine(
    combineGlobals(globals.browser, globals.node),
    typescript(),
    stylistic(),
    { ignores: [...ignores, "src/types/*.d.ts"] }
)
