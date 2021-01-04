function pairSum(nums, target) {
  // Insert code here;
  if(nums.length <= 1) {
    throw(Error);
  }
  for(i = 0; i < nums.length; i++) {
    for(j = 0; j < nums.length; j++) {
      if((nums[i] + nums[j]) == target) {
        return true;
      }
    }
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;