import { ref, watch } from 'vue-demi'
import { cloneDeep } from 'lodash-es'
import type { DateLike, MaybeRef } from '../shared'
import { useDate } from '../useDate'

export function useHours(date?: MaybeRef<DateLike>) {
  const refDate = useDate(date)
  const tmpDate = cloneDeep(refDate.value)
  const hours = ref(refDate.value.getHours())
  const isSetHours = false
  watch(hours, (val: number) => {
    refDate.value.setHours(val)
  })

  refDate.value.setHours = function (h: number) {
    if (!isSetHours)
      hours.value = h

    return tmpDate.setHours.call(this, h)
  }

  return {
    date: refDate,
    hours,
  }
}
