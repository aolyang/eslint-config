import type { Linter } from "eslint"

import { interopDefault } from "../utils"

export const globalsVue: Record<string, Linter.GlobalConf> = {
    computed: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    defineProps: "readonly",
    onMounted: "readonly",
    onUnmounted: "readonly",
    reactive: "readonly",
    ref: "readonly",
    shallowReactive: "readonly",
    shallowRef: "readonly",
    toRef: "readonly",
    toRefs: "readonly",
    watch: "readonly",
    watchEffect: "readonly"
}

export type VueOverrides = {
    files?: string[]
    typescript?: boolean
}

export const globVue = "**/*.vue"

export default async function vue(overrides: VueOverrides = {}): Promise<Linter.Config[]> {
    const {
        files = [globVue],
        typescript = true
    } = overrides
    const [
        pluginVue,
        parserVue
    ] = await Promise.all([
        interopDefault(import("eslint-plugin-vue")),
        interopDefault(import("vue-eslint-parser"))
    ] as const)

    return [
        {
            files,
            name: "setup-eslint-plugin/vue",
            languageOptions: {
                globals: globalsVue
            },
            plugins: {
                vue: pluginVue
            }
        },
        {
            files,
            name: "setup-eslint-parser/vue",
            languageOptions: {
                parser: parserVue,
                parserOptions: {
                    ecmaFeatures: {
                        jsx: true
                    },
                    extraFileExtensions: [".vue"],
                    parser: typescript
                        ? await interopDefault(import("@typescript-eslint/parser")) as any
                        : null,
                    sourceType: "module"
                }
            },
            processor: pluginVue.processors[".vue"]
        }
    ]
}
