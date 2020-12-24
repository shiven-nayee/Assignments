function titleCaseEdit(title) {
  // Insert code here;
  // Split into array
  let words = title.split(" ");

  let output = [];

  // console.log(words)

  for(i = 0; i < words.length; i++) {
    // Seperate each word into letters
    let split = words[i].split("");
    
    // Change first letter to uppercase
    split[0] = split[0].toUpperCase();

    // Join and push into array.
    output.push(split.join(""));
    // console.log(split)
  };
  
  return output.join(" ");
}

titleCaseEdit("there hello")

// Do not edit this line;
module.exports = titleCaseEdit;