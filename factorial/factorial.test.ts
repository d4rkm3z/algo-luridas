import { factorial } from './factorial';

it.each([
  [1, 1],
  [3, 6],
  [5, 120]
])('factorial', (input, expected) => {
  expect(factorial(input)).toEqual(expected);
})
