var Hamming = function() {};

Hamming.prototype.compute = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    throw new Error('DNA strands must be of equal length.')  	
  }

  var count = 0;

  for (key in arr1) {
    if (arr1[key] !== arr2[key]) {
      count += 1;
    }
  }

  return count;

};

module.exports = Hamming;
