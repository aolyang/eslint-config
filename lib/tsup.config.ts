import { defineConfig } from "tsup"

export default defineConfig({
    entry: {
        index: "src/index.ts",
        "stylistic/index": "src/stylistic.ts",
        "typescript/index": "src/typescript.ts",
        "react/index": "src/react.ts"
    },
    splitting: false,
    shims: true,
    clean: true,
    sourcemap: true
})