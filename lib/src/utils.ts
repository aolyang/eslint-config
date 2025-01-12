import type { Linter } from "eslint"

export type Awaitable<T> = T | Promise<T>

export interface PluginConfig<T> {
    files?: string[]
    rules?: T
}

export async function interopDefault<T>(module: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> {
    return Promise.resolve(module).then(m => (m as any).default ?? m)
}

type AwaitableConfigs = Awaitable<Linter.Config | Linter.Config[]>[]

export async function combine(...args: AwaitableConfigs): Promise<Linter.Config[]> {
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

export interface SharedConfig {
    files: string[]
}

export function combineConfig(config: Partial<SharedConfig>) {
    return async (...args: AwaitableConfigs): Promise<Linter.Config[]> => {
        return combine(...args).then(configs => configs.map((_config) => ({
            files: config.files ?? _config.files,
            ..._config
        })))
    }
}
