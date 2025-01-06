import { Linter } from "eslint"
import { interopDefault } from "../utils"

export type SvelteOverrides = {
    files?: string[]
    typescript?: boolean
}

export const globSvelte = "**/*.svelte"

export default async function svelte(overrides: SvelteOverrides): Promise<Linter.Config[]> {
    const {
        files = [globSvelte],
        typescript = true
    } = overrides
    const [
        pluginSvelte,
        parserSvelte
    ] = await Promise.all([
        interopDefault(import("eslint-plugin-svelte")),
        interopDefault(import("svelte-eslint-parser"))
    ] as const)
    return [
        {
            name: "setup-eslint-plugin/svelte",
            plugins: {
                svelte: pluginSvelte as any
            }
        },
        {
            files,
            name: "setup-eslint-parser/svelte",
            languageOptions: {
                parser: parserSvelte,
                parserOptions: {
                    extraFileExtensions: [".svelte"],
                    sourceType: "module",
                    parser: typescript
                        ? await interopDefault(import("@typescript-eslint/parser")) as any
                        : null
                }
            },
            processor: pluginSvelte.processors[".svelte"]
        }
    ]
}
