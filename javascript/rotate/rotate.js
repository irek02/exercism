var Rotate = function() {};

Rotate.prototype.rotate = function(image) {

  let newImage = image.map(function (row) {
    return row.map(function (column) {
      return undefined;
    });
  });

  // Traverse top
  for (let column = 0; column < image[0].length; column++) {
    let value = image[0][column];
    let newRow = column;
    let newColumn = image[0].length - 1;
    newImage[column][newColumn] = value;
  }

  // Traverse right
  for (let row = 1; row < image.length; row++) {
    let value = image[row][image[row].length - 1];
    let newRow = image[row].length - 1;
    let newColumn = image[row].length - (row - 1) - 2;
    newImage[newRow][newColumn] = value;
  }

  // Traverse bottom
  for (let column = image[0].length - 2; column >= 0; column--) {
    let value = image[image.length - 1][column];
    let newRow = column;
    let newColumn = 0;
    newImage[newRow][newColumn] = value;
  }

  // Traverse left
  for (let row = image.length - 2; row > 0; row--) {
    let value = image[row][0];
    let newRow = 0;
    let newColumn = row;
    newImage[newRow][newColumn] = value;
  }

  newImage[1][1] = image[1][1];

  console.log(newImage);

  return newImage;

};

module.exports = Rotate;
