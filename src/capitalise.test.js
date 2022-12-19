/* eslint-disable no-undef */
import capitalise from "./capitalise";

test('check word', () => {
  expect(capitalise('one')).toBe('One')
});

test('check one letter word', () => {
  expect(capitalise('t')).toBe('T')
});
