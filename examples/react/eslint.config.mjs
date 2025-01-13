import { combineConfig, ignores } from "@aolyang/eslint-config"
import importExport from "@aolyang/eslint-config/import-export"
import react        from "@aolyang/eslint-config/react"
import stylistic    from "@aolyang/eslint-config/stylistic"
import typescript   from "@aolyang/eslint-config/typescript"

export default combineConfig({
    files: ["*/react.tsx", "eslint.config.mjs"]
})(
    react(),
    typescript(),
    stylistic(),
    importExport(),
    { ignores }
)
