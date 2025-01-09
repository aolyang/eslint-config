# Opinionated ESLint Configs

```js
// eslint.config.mjs for react project
import globals from "globals"

import { combine, combineGlobals, ignores } from "@aolyang/eslint-config"
import react from "@aolyang/eslint-config/react"
import stylistic from "@aolyang/eslint-config/stylistic"

export default combine(
    combineGlobals(
        globals.browser,
        globals.node
    ),
    react(),
    stylistic(),
    { ignores }
)
```

That's All

## opinionated part can be overridden

Each `@aolyang/eslint-config/xxx` export a default function which with opinionated config presets  
The rest of the exports are also exported through `@aolyang/eslint-config`

Which means those are equal:

```js
import { combine } from "@aolyang/eslint-config"
import typescript from "@aolyang/eslint-config/typescript"

export default combine(
    typescript({
        files: ["*.ts", "*.tsx"],
        rules: {
            // ...merged my opinionated rules behind
            "@typescript-eslint/no-unused-vars": "off"
        }
    })
)
```

```js
import { combine, typescript, typescriptRules } from "@aolyang/eslint-config"

export default combine(
    // this provide parser config only
    typescript({
        files: ["*.ts", "*.tsx"]
    }),
    // ...merged my opinionated rules behind
    typescriptRules({
        "@typescript-eslint/no-unused-vars": "off"
    })
)
```

```js
import { combine } from "@aolyang/eslint-config"
import { typescript, typescriptRules } from "@aolyang/eslint-config/typescript"

export default combine(
    // this provide parser config only
    typescript({
        files: ["*.ts", "*.tsx"]
    }),
    // ...merged my opinionated rules behind
    typescriptRules({
        "@typescript-eslint/no-unused-vars": "off"
    })
)
```