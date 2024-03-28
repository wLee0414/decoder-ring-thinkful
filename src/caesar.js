// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;
    // returns false if shift is less than -25, equal to 0, greater than 25, or doesn't exist

    const lowerInput = input.toLowerCase();
    if (encode === false) shift *= -1;
    let result = []
    // turns input into lowercase and makes it so shift will shift letters the other way for decoding
    
    for (let letter of lowerInput) {
      if (alphabet.indexOf(letter) < 0) {
        result.push(letter);
      } else {
        let letterIndex = alphabet.indexOf(letter);
        letterIndex += shift;
        if (letterIndex > 25) {
          letterIndex -= 26;
        } else if (letterIndex < 0) {
        letterIndex += 26;
        }
      result.push(alphabet[letterIndex])
      }
    }; 
  // loop through input while using if to check what is in each index of input. if its an empty space, it pushes into result array. if it's a letter, it applies the shift and then uses if to check if its less than 0 or greater than 25 than subtracts or adds accordingly to make sure it loops around before pushing into result array.
    return result.join("")
}
  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };

