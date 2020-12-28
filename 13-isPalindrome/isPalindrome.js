function reverseWord(word) {
  let reversedWord = "";
  for(i = word.length-1; i >= 0; i--) {
    reversedWord += word.charAt(i);
  }
  return reversedWord;
}

function isPalindrome(word) {
  return (reverseWord(word) === word);
}

reverseWord("Hello");

// Do not edit this line;
module.exports = isPalindrome;