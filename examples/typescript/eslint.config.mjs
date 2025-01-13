import { combineConfig, ignores } from "@aolyang/eslint-config"
import importExport from "@aolyang/eslint-config/import-export"
import stylistic    from "@aolyang/eslint-config/stylistic"
import typescript   from "@aolyang/eslint-config/typescript"

export default combineConfig({
    files: ["*/typescript.ts", "eslint.config.mjs"]
})(
    typescript(),
    stylistic(),
    importExport(),
    { ignores }
)
