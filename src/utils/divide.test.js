import { describe, test, expect } from 'vitest'
import { divide } from './divide'

describe('divide', () => {
  test('6 / 2 = 3', () => {
    expect(divide(6, 2)).toBe(3)
  })

  test('divide by zero returns null', () => {
    expect(divide(5, 0)).toBe(null)
  })
})
