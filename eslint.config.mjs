import globals from "globals"

import { typescript, combine } from "@aolyang/eslint-config"
import { stylistic, stylisticRules } from "@aolyang/eslint-config/stylistic"

/** @type {import("eslint").Linter.Config[] } */
export default combine(
    {
        languageOptions: {
            globals: { ...globals.browser, ...globals.node }
        }
    },
    typescript(),
    stylistic(),
    stylisticRules()
)