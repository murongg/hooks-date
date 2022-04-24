import type { Ref } from 'vue'
import { ref } from 'vue'
import { interval as intervalFn, requestAnimationFrame } from '../utils'

export function useNow(interval: 'requestAnimationFrame' | number): Ref<Date> {
  const now = ref(new Date())
  const update = () => now.value = new Date()
  interval === 'requestAnimationFrame' ? requestAnimationFrame(update) : intervalFn(update, interval)
  return now
}
