import { describe, expect, it } from 'vitest'
import { useNow } from '.'
describe('useDateFormat', () => {
  it('should work with year', () => {
    expect(useNow({isExtend: true}).year.value).toBe(new Date().getFullYear())
  })
  it('should work with month', () => {
    expect(useNow({isExtend: true}).month.value).toBe(new Date().getMonth() + 1)
  })
  it('should work with day', () => {
    expect(useNow({isExtend: true}).day.value).toBe(new Date().getDate())
  })
  it('should work with week', () => {
    expect(useNow({isExtend: true}).week.value).toBe(new Date().getDay())
  })
  it('should work with hours', () => {
    expect(useNow({isExtend: true}).hours.value).toBe(new Date().getHours())
  })
  it('should work with minutes', () => {
    expect(useNow({isExtend: true}).minutes.value).toBe(new Date().getMinutes())
  })
})
