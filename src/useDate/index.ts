import type { Ref } from 'vue-demi'
import { ref, unref } from 'vue-demi'
import type { DateLike, MaybeRef } from '../shared'
import { normalizeDate } from '../utils'

export function useDate(date: MaybeRef<DateLike>): Ref<Date> {
  return ref(normalizeDate(unref(date)))
}
