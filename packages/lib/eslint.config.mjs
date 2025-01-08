import globals from "globals"

import { typescript, combine, ignores } from "@aolyang/eslint-config"
import { stylistic, stylisticRules } from "@aolyang/eslint-config/stylistic"

export default combine(
    {
        languageOptions: {
            globals: { ...globals.browser, ...globals.node }
        }
    },
    typescript(),
    stylistic(),
    stylisticRules(),
    { ignores }
)
