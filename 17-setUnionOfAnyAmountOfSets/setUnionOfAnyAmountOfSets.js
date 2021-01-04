function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let output = new Set();
  args.forEach(element => {
    element.forEach(num => {
      if(!(output.has(num))) {
        output.add(num);
      }
    })
  });

  return output;
}

setUnionOfAnyAmountOfSets()

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;