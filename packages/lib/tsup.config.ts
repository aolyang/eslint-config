import { defineConfig } from "tsup"

export default defineConfig({
    shims: true,
    entry: [
        "src/index.ts",
        "src/stylistic.ts",
        "src/react.ts"
    ]
})