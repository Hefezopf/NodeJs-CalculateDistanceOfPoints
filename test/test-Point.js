const { Point } = require('../src/Point');

var expect = require('chai').expect;

describe('Point', function () {
  it('When one Point is given, then the x, y must be correct', () => {
    var point = new Point(1, 3);

    expect(point.x).to.equal(1);
    expect(point.y).to.equal(3);
  });
});
