import { computed, unref } from 'vue'
import { FORMAT_DEFAULT } from '../constant'
import type { DateLike, MaybeRef } from '../shared'
import { formatDate, normalizeDate } from '../utils'

export function useDateFormat(date: MaybeRef<DateLike>, formatStr: MaybeRef<string> = FORMAT_DEFAULT) {
  return computed(() => formatDate(normalizeDate(unref(date)), unref(formatStr)))
}
