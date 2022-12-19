/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
export default function analyze(array){
  if(Array.isArray(array) === false) return "Must be an array";

  const newArray = array.sort()

  const object = {
    average: array.reduce((a,b)=>a+b) / array.length,
    min: newArray[0],
    max: newArray[newArray.length - 1],
    length : array.length
  }

  return object
}