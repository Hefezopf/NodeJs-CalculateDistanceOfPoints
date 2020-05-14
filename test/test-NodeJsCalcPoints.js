const { Point } = require('./../Point');

var expect = require('chai').expect;

describe('Point', function () {
  describe('determineMinimum', function () {
    it('When two points given, then the minimum must be correct', () => {

      const p1 = new Point(1, 4);
      const p2 = new Point(2, 3);
      var value = Point.determineMinimum(p1, p2);

      expect(value).to.equal(1.4142135623730951);
    });
  });
});

describe('Point', function () {
  describe('determineMinimumOfArray', function () {
    it('When points array given, then the minimum must be correct', () => {

      const p1 = new Point(1, 4);
      const p2 = new Point(2, 3);
      const p3 = new Point(3, 2);
      const p4 = new Point(4, 1);
      
      const points = [p1, p2, p3, p4];
      var value = Point.determineMinimumOfArray(points);

      expect(value).to.equal(1.4142135623730951);
    });
  });
});