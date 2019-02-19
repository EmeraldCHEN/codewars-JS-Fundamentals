/* Instructions
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, 
the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.  */

function isPangram(string){
// a global search for non-word characters, underscores, spaces and numbers 0 to 9 and remove all of them
  let newStr = string.replace(/\W|_|\s|[0-9]/g, "").toUpperCase(); 
  if(newStr.length < 26){
    return false;
  }
 /* for(let i = 0; i < newStr.length; i++){
      if(newStr.charCodeAt(i) < 65 || newStr.charCodeAt(i) > 90) { // if newStr includes any char !== [A-Z]
          return false;
      } 
    }
 */ 
  return true;
}

// Even though the solution above has passed 2 tests on codewars.com it's not a completely correct answer. 
// If the the test case is"abcabcabcabcabcabcabcabcabcabcabcabcabcabcabc". It says that my code returns True.
