import subtract from "./subtract";

test('simple subtract', ()=>{
  expect(subtract(10, 5)).toBe(5)
})

test('negative subtract', ()=>{
  expect(subtract(10, 25)).toBe(-15)
})