import { combineConfig, ignores } from "@aolyang/eslint-config"
import importExport from "@aolyang/eslint-config/import-export"
import stylistic    from "@aolyang/eslint-config/stylistic"

export default combineConfig({
    files: ["*/javascript.js", "eslint.config.mjs"]
})(
    stylistic(),
    importExport(),
    { ignores }
)
