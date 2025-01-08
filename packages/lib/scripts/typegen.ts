import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "url"
import { flatConfigsToRulesDTS } from "eslint-typegen/core"
import { Awaitable, typescript, react, vue, svelte, astro, stylistic } from "../src"
import { Linter } from "eslint"

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