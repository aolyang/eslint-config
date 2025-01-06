export type Awaitable<T> = T | Promise<T>

export async function interopDefault<T>(module: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> {
    return Promise.resolve(module).then(m => (m as any).default ?? m)
}