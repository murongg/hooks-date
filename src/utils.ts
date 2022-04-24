import { onUnmounted } from 'vue'
import { REGEX_FORMAT, REGEX_PARSE } from './constant'
import type { DateLike, Fn } from './shared'
export function normalizeDate(date: DateLike) {
  if (date === null)
    return new Date(NaN) // null is invalid
  if (date === undefined)
    return new Date()
  if (date instanceof Date)
    return new Date(date)
  if (typeof date === 'string' && !/Z$/i.test(date)) {
    const d = date.match(REGEX_PARSE) as any
    if (d) {
      const m = d[2] - 1 || 0
      const ms = (d[7] || '0').substring(0, 3)
      return new Date(d[1], m, d[3]
        || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms)
    }
  }
  return new Date(date!)
}

export const formatDate = (date: Date, formatStr: string) => {
  const years = date.getFullYear()
  const month = date.getMonth()
  const days = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const milliseconds = date.getMilliseconds()
  const day = date.getDay()
  const matches: Record<string, string | number> = {
    YY: String(years).slice(-2),
    YYYY: years,
    M: month + 1,
    MM: `${month + 1}`.padStart(2, '0'),
    D: String(days),
    DD: `${days}`.padStart(2, '0'),
    H: String(hours),
    HH: `${hours}`.padStart(2, '0'),
    h: `${hours % 12 || 12}`.padStart(1, '0'),
    hh: `${hours % 12 || 12}`.padStart(2, '0'),
    m: String(minutes),
    mm: `${minutes}`.padStart(2, '0'),
    s: String(seconds),
    ss: `${seconds}`.padStart(2, '0'),
    SSS: `${milliseconds}`.padStart(3, '0'),
    d: day,
  }

  return formatStr.replace(REGEX_FORMAT, (match, $1) => $1 || matches[match])
}

export const isArray = (val: any) => Array.isArray(val)
export const isDate = (val: any) => val instanceof Date

export function interval(cb: Fn, interval = 1000) {
  const timer = setInterval(cb, interval)
  onUnmounted(() => {
    clearInterval(timer)
  })
}

export function requestAnimationFrame(cb: Fn) {
  const rafId = window.requestAnimationFrame(cb)
  onUnmounted(() => {
    window.cancelAnimationFrame(rafId)
  })
}
