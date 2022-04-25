import type { ComputedRef, Ref } from 'vue'

/**
 * Maybe it's a ref, or not.
 */
export type MaybeRef<T> = Ref<T> 

/**
 * Maybe it's a computed ref, or not.
 */
export type MaybeComputedRef<T> = ComputedRef<T>

/**
 * date type
 */
export type DateLike = Date | number | string | undefined

/**
 * Any function
 */
export type Fn = () => void

/**
 * day info
 * years month day hours minutes milliseconds seconds week
 */
export interface DayInfo {
  year: MaybeComputedRef<number>
  month: MaybeComputedRef<number>
  day: MaybeComputedRef<number>
  hours: MaybeComputedRef<number>
  minutes: MaybeComputedRef<number>
  milliseconds: MaybeComputedRef<number>
  seconds: MaybeComputedRef<number>
  week: MaybeComputedRef<number>
}
