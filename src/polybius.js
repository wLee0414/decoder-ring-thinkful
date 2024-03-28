// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = {
    "a" : 11,
    "b" : 21,
    "c" : 31,
    "d" : 41,
    "e" : 51,
    "f" : 12,
    "g" : 22,
    "h" : 32,
    "i/j" : 42,
    "k" : 52,
    "l" : 13,
    "m" : 23,
    "n" : 33,
    "o" : 43,
    "p" : 53,
    "q" : 14,
    "r" : 24,
    "s" : 34,
    "t" : 44,
    "u" : 54,
    "v" : 15,
    "w" : 25,
    "x" : 35,
    "y" : 45,
    "z" : 55
  };
  // made an object with the keys as letters as values as the corresponding numbers
    
  function checkNumbersLength(input) {
    const numbersLength = []; 
    for (let num of input) {
      if (num !== " ")  numbersLength.push(num)
    }
  return numbersLength.length % 2 !== 0;
  } 
  // made a function to check for numbers length

function polybius(input, encode = true) {
    let result = [];
    const lowerInput = input.toLowerCase();
    // made an empty result array and made input to lowercase.

    /* FOR ENCODING, made if statement to check for encode or decode.
       for encode, made a loop to loop through lowerInput to push into result, if it's an i or j (push i/j aka 42), if its a space (push " "), and if its a letter (push the corresponding number). */
    /* ENCODING */
    if (encode) {
      for (let letter of lowerInput) {
        if (letter === "i" || letter === "j") { 
          	result.push(alphabet["i/j"])
        } else if (letter === " ") {
           result.push(letter)
        } else {
        result.push(alphabet[letter])
        }
      }
      return result.join("")
    } /* DECODING */ else {
      if (checkNumbersLength(input)) {
        return false};

      let pair = [];
      let joinedPairs = [];
  
      for (let number of input) {
        if (number === " ") {
          joinedPairs.push(number);
        } else {
          pair.push(number);
          if (pair.length === 2) {
            let pairing = pair.join("");
            joinedPairs.push(pairing);
            pair = [];
          }
        }
      }
  	  for (let pair of joinedPairs) {
        if (pair === " ") {
          result.push(pair);
        } else {
          	const letter = Object.keys(alphabet).find(key => alphabet[key] == pair)
            result.push(letter);
          }
        } return result.join("");     
    } /* FOR DECODING. first used the function for checking if number length was long. Then made a pair(to form pairs) and joinedPairs(to push formed pairs) array to make pairs. Made a loop, if space (push space into joinedPairs), if number (push into pair array, if the numbers in pair are a pair (push into joinedPairs). loop through joinedPairs to match values w then push to result*/
}
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
