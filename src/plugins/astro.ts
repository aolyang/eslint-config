import { Linter } from "eslint"
import { interopDefault } from "../utils"

export type AstroOverrides = {
    files?: string[]
    typescript?: boolean
}

export const globAstro = "**/*.astro"

export default async function astro(overrides: AstroOverrides = {}): Promise<Linter.Config[]> {
    const {
        files = [globAstro],
        typescript = true
    } = overrides
    const [
        pluginAstro,
        parserAstro
    ] = await Promise.all([
        interopDefault(import("eslint-plugin-astro")),
        interopDefault(import("astro-eslint-parser"))
    ] as const)
    return [
        {
            name: "setup-eslint-plugin/astro",
            plugins: {
                astro: pluginAstro
            }
        },
        {
            files,
            name: "setup-eslint-parser/astro",
            languageOptions: {
                globals: pluginAstro.environments.astro.globals,
                parser: parserAstro,
                parserOptions: {
                    extraFileExtensions: [".astro"],
                    sourceType: "module",
                    parser: typescript
                        ? await interopDefault(import("@typescript-eslint/parser"))
                        : null
                }
            },
            processor: typescript
                ? pluginAstro.processors["client-side-ts"]
                : pluginAstro.processors[".astro"]
        }
    ]
}
