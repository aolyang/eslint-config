import type { Linter } from "eslint"

import { interopDefault } from "../utils"

export type ReactOverrides = {
    files?: string[]
    typescript?: boolean
}

export const globReact = "**/*.{ts,tsx}"

export default async function react(overrides: ReactOverrides = {}): Promise<Linter.Config[]> {
    const {
        files = [globReact]
    } = overrides

    const [
        pluginReact,
        pluginReactHooks,
        pluginReactRefresh
    ] = await Promise.all([
        interopDefault(import("@eslint-react/eslint-plugin")),
        interopDefault(import("eslint-plugin-react-hooks")),
        interopDefault(import("eslint-plugin-react-refresh"))
    ] as const)

    const plugins = pluginReact.configs.all.plugins
    return [
        {
            files,
            name: "setup-eslint-plugin/react",
            plugins: {
                "react": plugins["@eslint-react"],
                "react-dom": plugins["@eslint-react/dom"],
                "react-hooks-extra": plugins["@eslint-react/hooks-extra"],
                "react-naming-convention": plugins["@eslint-react/naming-convention"],
                "react-hooks": pluginReactHooks,
                "react-refresh": pluginReactRefresh
            } as any
        },
        {
            files,
            languageOptions: {
                sourceType: "module",
                parserOptions: {
                    ecmaFeatures: {
                        jsx: true
                    }
                }
            }
        }
    ]
}
