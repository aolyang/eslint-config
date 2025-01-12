import type { Linter } from "eslint"

import { interopDefault } from "../utils"

export type ImportExportOverrides = {
    files?: string[]
}

export const globImportExport = "**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,svelte,astro,vue}"

export default async function importExport(overrides: ImportExportOverrides = {}): Promise<Linter.Config[]> {
    const {
        files = [globImportExport]
    } = overrides

    const [
        pluginImportSort
    ] = await Promise.all([
        interopDefault(import("eslint-plugin-simple-import-sort"))
    ] as const)

    return  [
        {
            files,
            name: "setup-eslint-plugin/import-export",
            plugins: {
                "simple-import-sort": pluginImportSort
            }
        }
    ]
}
