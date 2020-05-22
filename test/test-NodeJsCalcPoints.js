const { Point } = require('../src/Point');

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

      const pA = new Point(1, 1);
      const pB = new Point(1, 3);
      const pC = new Point(4, 4);
      const pD = new Point(6, 1);
      
      const points = [pA, pB, pC, pD];
      var value = Point.determineMinimumOfArray(points);

      expect(value).to.equal(2.0);
    });
  });
});