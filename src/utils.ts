export type Awaitable<T> = T | Promise<T>

export async function interopDefault<T>(module: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> {
    return Promise.resolve(module).then(m => (m as any).default ?? m)
}

export async function withConfigs<T>(configs: Awaitable<T[]>): Promise<T[]> {
    return Promise.resolve(configs)
}