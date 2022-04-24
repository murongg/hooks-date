import type { Ref } from 'vue'
import { ref, unref } from 'vue'
import type { DateLike, MaybeRef } from '../shared'
import { normalizeDate } from '../utils'

export function useDate(date: MaybeRef<DateLike>): Ref<Date> {
  return ref(normalizeDate(unref(date)))
}
