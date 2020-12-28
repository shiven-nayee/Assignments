function fizzBuzz(start, end) {
  // Insert code here;
  let output = [];
  for(i = start; i <= end; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
      output.push("FizzBuzz");
    } else if(i % 5 == 0) {
      output.push("Buzz");
    } else if(i % 3 == 0 ) {
      output.push("Fizz");
    } else {
      output.push(i);
    }
  }
  return output;
}

// Do not edit this line;
module.exports = fizzBuzz;