import { describe, test, expect } from 'vitest'
import { subtract } from './subtract'

describe('subtract', () => {
  test('5 - 3 = 2', () => {
    expect(subtract(5, 3)).toBe(2)
  })

  test('3 - 5 = -2', () => {
    expect(subtract(3, 5)).toBe(-2)
  })
})
