var Rotate = require('./rotate');

describe('Rotate', function () {
  var rotate = new Rotate();

  var image = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  it('foo', function () {
    var expected = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ];
    
    expect(rotate.rotate(image)).toEqual(expected);
  });

});
