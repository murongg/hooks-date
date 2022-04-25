import { describe, expect, it } from 'vitest'
import { useNow } from '.'
describe('useDateFormat', () => {
  const { year, month, day, week, minutes, hours } = useNow({ isExtend: true })
  const date = new Date()
  it('should work with year', () => {
    expect(year.value).toBe(date.getFullYear())
  })
  it('should work with month', () => {
    expect(month.value).toBe(date.getMonth() + 1)
  })
  it('should work with day', () => {
    expect(day.value).toBe(date.getDate())
  })
  it('should work with week', () => {
    expect(week.value).toBe(date.getDay())
  })
  it('should work with hours', () => {
    expect(hours.value).toBe(date.getHours())
  })
  it('should work with minutes', () => {
    expect(minutes.value).toBe(date.getMinutes())
  })
})
