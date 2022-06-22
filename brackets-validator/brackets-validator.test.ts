import { bracketsValidator } from './brackets-validator'

test.each([
  ['(((>})', false],
  ['((())', false],
  ['((()))', true]
])('bracketsValidator', (str, expected) => {
  expect(bracketsValidator(str)).toBe(expected);
})
