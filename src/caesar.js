/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
/* eslint-disable no-constant-condition */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

function hide(string, amount){
  // create new word
  let word = ''

  // loop over all letters of string
  for(const letter in string){
    // convert current letter to a code
    const code = string.charCodeAt(letter);
    
    // initialise newCode
    let newCode = ''

    // check letter is in the alphabet, and transform by
    // requested amount, checking not to overflow
    // pass the alphabet
    if (code >= 65 && code <= 90 ){
      newCode = code + amount > 90 ? (code + amount) - 26 : code + amount
    } else if (code >= 97 && code <= 122) {
      newCode = code + amount > 122 ? (code + amount) - 26 : code + amount
    } else {
      // if not in alphabet, do not change
      newCode = code
    }
    // conver back to a letter from unicode
    const newLetter = String.fromCodePoint(newCode)
    // add to word
    word += newLetter
  }
  return word
}

function show(string, amount){
  // function works the same as hide
  // except it checks for going under a set of numbers
  // and add's 26 instead of taking away

  // using Math.abs to change negative number to a positive one
  amount = Math.abs(amount)
  let word = ''
  for(const letter in string){
    const code = string.charCodeAt(letter);
    let newCode = ''
    if (code >= 65 && code <= 90 ){
      newCode = code - amount < 65 ? (code - amount) + 26 : code - amount
    } else if (code >= 97 && code <= 122) {
      newCode = code - amount < 97 ? (code - amount) + 26 : code - amount
    } else {
      newCode = code
    }
    const newLetter = String.fromCodePoint(newCode)
    word += newLetter
  }
  return word
}

// main function for caesar 
export default function caesar(string, amount){
  // check for 0 and return string as no changes to be made
  if (amount === 0 ) return string

  // if positive number, scramble letters
  // if negative number, revert back to unscrambled
  return amount > 0 ? hide(string, amount) : show(string, amount)
}

