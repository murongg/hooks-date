import type { Ref } from 'vue'

/**
 * Maybe it's a ref, or not.
 */
export type MaybeRef<T> = T | Ref<T>

/**
 * date type
 */
export type DateLike = Date | number | string | undefined

/**
 * Any function
 */
 export type Fn = () => void
