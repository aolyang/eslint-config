import type { ImportExportOverrides } from "./plugins/import-export"
import type { ImportExportRules } from "./rules/import-export"
import type { Linter } from "eslint"

import plugin from "./plugins/import-export"
import importExportRules from "./rules/import-export"
import { combine } from "./utils"

interface ImportExportConfig extends ImportExportOverrides {
    rules?: ImportExportRules
}

export default function importExport(config?: ImportExportConfig): Promise<Linter.Config[]> {
    return combine(
        plugin(config),
        importExportRules(config)
    )
}

export type { ImportExportConfig, ImportExportOverrides, ImportExportRules }
export { plugin as importExport, importExportRules }
