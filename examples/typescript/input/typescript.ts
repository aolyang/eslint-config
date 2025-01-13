/* eslint-disable @stylistic/no-multiple-empty-lines */
// eslint-disable-next-line simple-import-sort/imports
import importExport from "@aolyang/eslint-config/import-export"
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Linter } from "eslint"
import stylistic    from "@aolyang/eslint-config/stylistic"
import "./side-effect"
import typescript   from "@aolyang/eslint-config/typescript"

const eslintPlugin: Linter.Config = {
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
interface Person {
    name: string; age: number;
}

// Create an array of objects with the defined interface
const people: Person[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },

    { name: "Charlie",
        age: 35 }
]

interface Car {
    make: string;
    model?: string;
}

const car1: Car = { make: "Toyota" }
// eslint-disable-next-line @stylistic/no-multi-spaces
const car2:  Car = {
    make: "Ford", model: "Focus" }
