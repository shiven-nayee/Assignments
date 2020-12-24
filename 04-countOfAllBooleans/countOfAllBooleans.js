function countOfAllBooleans(arr) {
  // Insert code here;
  let countOfBools = 0;
  
  for(i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'boolean') {
      countOfBools++;
    }
  }
  return countOfBools;
}

// Do not edit this line;
module.exports = countOfAllBooleans;