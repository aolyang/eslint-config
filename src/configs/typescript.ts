import type { Linter } from "eslint";

import { interopDefault } from "../utils";

export type TypeScriptOverrides = {
    files?: string[]
}

export const globTypeScript = "**/*.{ts,mts,tsx,mtsx,cts,ctsx}"

export default async function typescript(overrides: TypeScriptOverrides): Promise<Linter.Config[]> {
    const {
        files = [globTypeScript]
    } = overrides

    const [
        pluginTypeScript,
        parserTypeScript,
    ] = await Promise.all([
        interopDefault(import('@typescript-eslint/eslint-plugin')),
        interopDefault(import('@typescript-eslint/parser'))
    ] as const)


    return [
        {
            name: "setup-eslint-plugin/typescript",
            plugins: {
                '@typescript-eslint': pluginTypeScript as any
            }
        },
        {
            files,
            name: "setup-eslint-parser/typescript",
            languageOptions: {
                parser: parserTypeScript,
                parserOptions: {
                    sourceType: 'module',
                }
            }
        }
    ]
}
