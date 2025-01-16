import { defineConfig } from "tsup"

export default defineConfig({
    entry: {
        index: "src/index.ts",
        "react/index": "src/react.ts",
        "typescript/index": "src/typescript.ts",
        "stylistic/index": "src/stylistic.ts",
        "import-export/index": "src/import-export.ts",
        "svelte/index": "src/svelte.ts",
        "vue/index": "src/vue.ts"
    },
    splitting: false,
    shims: true,
    clean: true,
    sourcemap: true
})
