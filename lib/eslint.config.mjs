import { combine, combineGlobals,ignores } from "@aolyang/eslint-config"
import importExport from "@aolyang/eslint-config/import-export"
import stylistic from "@aolyang/eslint-config/stylistic"
import typescript from "@aolyang/eslint-config/typescript"
import globals from "globals"

export default combine(
    combineGlobals(globals.browser, globals.node),
    typescript(),
    stylistic(),
    importExport(),
    { ignores: [...ignores, "src/types/*.d.ts"] }
)
