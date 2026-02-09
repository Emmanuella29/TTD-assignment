import { describe, test, expect } from 'vitest'
import { findMax } from './findMax'

describe('findMax', () => {
  test('finds max in array', () => {
    expect(findMax([1, 5, 3])).toBe(5)
  })

  test('works with negative numbers', () => {
    expect(findMax([-10, -3, -20])).toBe(-3)
  })
})
