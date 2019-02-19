/* Instructions
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, 
the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.  */

function isPangram(s){
// a global search for non-word characters, underscores, spaces and numbers 0 to 9 and remove all of them
  let newStr = s.replace(/\W|_|\s|[0-9]/g, "").toUpperCase(); 
  if(newStr.length < 26){
    return false;
  }
 /* Unfortunately the below codes are redundant ****************************************************************
 for(let i = 0; i < newStr.length; i++){
      if(newStr.charCodeAt(i) < 65 || newStr.charCodeAt(i) > 90) { // if newStr includes any char !== [A-Z]
          return false;
      } 
    }
 ***************************************************************************************************************/ 
  return true;
}
// Even though the solution above has passed 2 tests on codewars.com it's  an incorrect answer. 
// If the the test case is"abcabcabcabcabcabcabcabcabcabcabcabcabcabcabc" it still says that my code returns True.

// The following solution is the correct solution

function isPangram(string){
  let newStr = string.replace(/\W|_|\s|[0-9]/g, "").toUpperCase();
  if(newStr.length < 26){
    return false;
  }
  let arr = [];
  for(let i = 0; i < newStr.length; i++){
      arr.push(newStr.charCodeAt(i));
  }
  arr.sort();
  let uniqueArr = arr.filter((value, index) => arr.indexOf(value)==index);
  if(uniqueArr.length < 26){
      return false;
  }
  /* Unfortunately the below codes are redundant ****************************************************************
    for(let j = 0; j < uniqueArr.length + 1; j++){
        if(uniqueArr[j+1] - uniqueArr[j] !== 1){
            return false;
        }
    }
 ***************************************************************************************************************/ 
  return true;
}

isPangram("The quick brown &*_12345 dog"); //Return false
isPangram("aaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaa"); //Return false
