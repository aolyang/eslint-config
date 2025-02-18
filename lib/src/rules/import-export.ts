import type { Linter } from "eslint"
import type { RuleOptions as ImportExportRules } from "../types/import-export"
import type { PluginConfig } from "../utils"

import { globImportExport } from "../plugins/import-export"

export type {
    ImportExportRules
}

export const importExportRecommended: ImportExportRules = {
    "simple-import-sort/imports": [
        "error",
        {
            groups: [
                // Side effect imports.
                ["^\\u0000"],
                // type import
                ["^@?\\w.*\\u0000$", "^[@~#].*\\u0000$", "^\\..*\\u0000$"],
                // Node.js builtins prefixed with `node:`.
                ["^node:"],
                // Packages.
                // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
                ["^@?\\w"],
                // Absolute imports and other imports such as Vue-style `@/foo`.
                // Anything not matched in another group.
                ["^"],
                // Relative imports.
                // Anything that starts with a dot.
                ["^\\.\\S+(?<!\\u0000$)"]
            ]
        }
    ]
}

export default function importExportRules({
    rules,
    files = [globImportExport]
}: PluginConfig<ImportExportRules> = {}): Linter.Config {
    return ({ files, rules: Object.assign({}, importExportRecommended, rules) }) as Linter.Config
}
