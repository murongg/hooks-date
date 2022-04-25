import type { Ref } from 'vue'
import { ref } from 'vue'
import { DayInfo } from '../shared'
import { getDateInfo, interval as intervalFn, requestAnimationFrame } from '../utils'

export interface UseNowOptions<IsExtend extends boolean> {
  /**
   * Extend years month day hours minutes milliseconds seconds week
   *
   * @default false
   */
  isExtend?: IsExtend

  /**
   * Update interval, or use requestAnimationFrame
   *
   * @default requestAnimationFrame
   */
  interval?: 'requestAnimationFrame' | number
}
export function useNow(options?: UseNowOptions<false>): Ref<Date>
export function useNow(options?: UseNowOptions<true>): { now: Ref<Date> } & DayInfo
export function useNow(options: UseNowOptions<boolean> = {}) {
  const { interval, isExtend } = options
  const now = ref(new Date())
  const update = () => now.value = new Date()
  interval === 'requestAnimationFrame' ? requestAnimationFrame(update) : intervalFn(update, interval)
  return isExtend ? { now, ...getDateInfo(now) } : now
}

export type UseNowReturn = ReturnType<typeof useNow>
