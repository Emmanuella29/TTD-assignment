import { describe, test, expect } from 'vitest'
import { add } from './add'

describe('add', () => {
  test('adds 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5)
  })

  test('adds -1 + 1 = 0', () => {
    expect(add(-1, 1)).toBe(0)
  })
})
