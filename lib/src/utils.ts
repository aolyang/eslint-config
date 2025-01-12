import type { Linter } from "eslint"

export type Awaitable<T> = T | Promise<T>

export interface PluginConfig<T> {
    files?: string[]
    rules?: T
}

export async function interopDefault<T>(module: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> {
    return Promise.resolve(module).then(m => (m as any).default ?? m)
}


export async function combine(...args: Awaitable<Linter.Config | Linter.Config[]>[]): Promise<Linter.Config[]> {
    const configs = await Promise.all(args)
    return configs.flat()
}

export function combineGlobals(...args: Linter.Globals[]): Linter.Config {
    return {
        languageOptions: {
            globals: args.reduce((acc, curr) => ({ ...acc, ...curr }), {})
        }
    }
}

