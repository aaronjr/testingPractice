import multiply from "./multiply";

test('basic multiply', () => {
  expect(multiply(2, 2)).toBe(4)
})

test('basic multiply', () => {
  expect(multiply(100, 100)).toBe(10000)
})