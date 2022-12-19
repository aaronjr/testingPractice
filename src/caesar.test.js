import caesar from "./caesar";

test('simple', () => {
  expect(caesar('hello you', 1)).toBe('ifmmp zpv')
}) 

test('longer no punctuation', () => {
  expect(caesar('attack at dawn', 1)).toBe('buubdl bu ebxo')
}) 

test('longer with punctuation', () => {
  expect(caesar('attack, at dawn!', 1)).toBe('buubdl, bu ebxo!')
}) 

test('reverse already reversed string and with punctuation', () => {
  expect(caesar('buubdl, bu ebxo!', -1)).toBe('attack, at dawn!')
}) 
