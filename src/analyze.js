/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
export default function analyze(array){
  if(Array.isArray(array) === false) return "Must be an array";

  // sort array
  const newArray = array.sort()

  const object = {
    // total of array and divide by length
    average: array.reduce((a,b) => a + b) / array.length,
    // first item of sorted array
    min: newArray[0],
    // last item of sorted array
    max: newArray[newArray.length - 1],
    // length of array
    length : array.length
  }

  // return object
  return object
}