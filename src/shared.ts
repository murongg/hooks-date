import type { ComputedRef, Ref } from 'vue'

/**
 * Maybe it's a ref, or not.
 */
export type MaybeRef<T> = Ref<T> | T

/**
 * Maybe it's a computed ref, or not.
 */
export type MaybeComputedRef<T> = ComputedRef<T> | T

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
  year: ComputedRef<number>
  month: ComputedRef<number>
  day: ComputedRef<number>
  hours: ComputedRef<number>
  minutes: ComputedRef<number>
  milliseconds: ComputedRef<number>
  seconds: ComputedRef<number>
  week: ComputedRef<number>
}
