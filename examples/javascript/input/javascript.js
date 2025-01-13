/* eslint-disable @stylistic/no-multiple-empty-lines */
// eslint-disable-next-line simple-import-sort/imports
import importExport from "@aolyang/eslint-config/import-export"
import stylistic    from "@aolyang/eslint-config/stylistic"
import "./side-effect"
import typescript   from "@aolyang/eslint-config/typescript"

const eslintPlugin = {
    name: "test",
    // multiple empty lines between object properties


    rules: {
        "no-console": "error"
    }
}

const plugins = [
    eslintPlugin,
    typescript(),
    stylistic(), importExport()

]
// multiple empty lines between block start



// multiple empty lines between block end
const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },

    { name: "Charlie",
        age: 35 }
]

const car1 = { make: "Toyota" }
const car2    = {
    make: "Ford", model: "Focus" }
