import type { Linter } from "eslint"
import { interopDefault } from "../utils"

export type StylisticOverrides = {
    files?: string[]
}
export const globalStylistic = "**/*.{js,cjs,mjs,jsx,ts,mts,tsx,mtsx,cts,ctsx,vue,svelte,astro}"

export default async function stylistic(overrides: StylisticOverrides = {}): Promise<Linter.Config[]> {
    const {
        files = [globalStylistic]
    } = overrides
    const pluginStylistic = await interopDefault(import("@stylistic/eslint-plugin"))

    return [
        {
            files,
            name: "setup-eslint-plugin/stylistic",
            plugins: {
                "@stylistic": pluginStylistic
            }
        }
    ]
}
