import type { Linter } from "eslint"
import type { Awaitable} from "../src"

import fs from "node:fs/promises"
import path from "node:path"

import { flatConfigsToRulesDTS } from "eslint-typegen/core"
import { fileURLToPath } from "url"

import { astro, react, stylistic,svelte, typescript, vue } from "../src"
import importExport from "../src/plugins/import-export"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const dts = (configs: Awaitable<Linter.Config[]>, save: string) =>
    Promise.resolve(configs)
        .then(configs => flatConfigsToRulesDTS(configs))
        .then(dts => fs.writeFile(path.resolve(__dirname, `../src/types/${save}.d.ts`), dts))

dts(react(), "react")
dts(typescript(), "typescript")
dts(svelte(), "svelte")
dts(vue(), "vue")
dts(astro(), "astro")
dts(stylistic(), "stylistic")
dts(importExport(), "import-export")
