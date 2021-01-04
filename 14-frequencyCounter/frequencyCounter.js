function frequencyCounter(word) {
  // Insert code here;
  let output = {};
  for(i = 0; i < word.length; i++) {
    let character = word.charAt(i);
    if(output[character]) {
      output[character]++;
    } else {
      output[character] = 1;
    }
  }
  return output;
}

// Optimal solution using maps
// let map = new Map();
//   for(i = 0; i < word.length; i++) {
//     if(map.get(word[i]) == undefined) {
//       map.set(word[i], 1);
//     } else {
//       map.set(word[i], map.get(word[i]) + 1)
//     }
//   }

frequencyCounter("hello")

// Do not edit this line;
module.exports = frequencyCounter;