import { ref, watch } from 'vue-demi'
import { cloneDeep } from 'lodash-es'
import type { DateLike, MaybeRef } from '../shared'
import { useDate } from '../useDate'

export function useYears(date?: MaybeRef<DateLike>) {
  const refDate = useDate(date)
  const tmpDate = cloneDeep(refDate.value)
  const years = ref(refDate.value.getFullYear())
  const isSet = false
  watch(years, (val: number) => {
    refDate.value.setFullYear(val)
  })

  refDate.value.setFullYear = function (h: number) {
    if (!isSet)
      years.value = h

    return tmpDate.setFullYear.call(this, h)
  }

  return {
    date: refDate,
    years,
  }
}
