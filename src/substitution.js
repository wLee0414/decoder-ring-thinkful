// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const engAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // made an array of alphabets to switch between the substituted alphabet

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    // returns false if substitute alphabet length is not 26
    for (let letter of alphabet) {
      if (alphabet.indexOf(letter) < alphabet.indexOf(letter, 2)) return false;
    };
    // returns false if substitute alphabet has repeating characters;
    const result = [];
    const lowerInput = input.toLowerCase();
    /* FOR ENCODING, looping through input. Find index of where each letter of input would be on the engAlphabet. Then use index to find and push substitute letter. if its not a letter, push it without switching*/
    if (encode) /*ENCODING */{
      for (let letter of lowerInput) {
        const index = engAlphabet.indexOf(letter);
        if (index < 0) {
          result.push(letter)
        } else {
          result.push(alphabet[index])
        }
      }
    } else /*DECODING */{
      for (let letter of lowerInput) {
        const index = alphabet.indexOf(letter);
        if (index < 0) {
          result.push(letter)
        } else {
          result.push(engAlphabet[index])
        }
      }
    }
    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };