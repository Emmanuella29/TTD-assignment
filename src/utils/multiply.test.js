import { describe, test, expect } from 'vitest'
import { multiply } from './multiply'

describe('multiply', () => {
  test('2 * 3 = 6', () => {
    expect(multiply(2, 3)).toBe(6)
  })

  test('5 * 0 = 0', () => {
    expect(multiply(5, 0)).toBe(0)
  })
})
