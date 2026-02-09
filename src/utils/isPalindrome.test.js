import { describe, test, expect } from 'vitest'
import { isPalindrome } from './isPalindrome'

describe('isPalindrome', () => {
  test('racecar is palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true)
  })

  test('hello is not palindrome', () => {
    expect(isPalindrome('hello')).toBe(false)
  })
})
