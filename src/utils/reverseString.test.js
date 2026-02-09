import { describe, test, expect } from 'vitest'
import { reverseString } from './reverseString'

describe('reverseString', () => {
  test('reverses hello', () => {
    expect(reverseString('hello')).toBe('olleh')
  })

  test('reverses empty string', () => {
    expect(reverseString('')).toBe('')
  })
})
