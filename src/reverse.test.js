/* eslint-disable no-undef */
import reverse from "./reverse";

test('reverse word', () => {
  expect(reverse('one')).toBe('eno')
});

test('reverse two words', () => {
  expect(reverse('tree tree')).toBe('eert eert')
});

test('reverse one letter word', () => {
  expect(reverse('t')).toBe('t')
});
