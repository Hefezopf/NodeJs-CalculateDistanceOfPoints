const { Point } = require('../src/Point');

var expect = require('chai').expect;

describe('Point', function () {
  describe('parseAllCoords', function () {
    it('When all coords given, then the all x, y must be correct', () => {
      const coords = "(4,3) (5,2) (1,1) (1,2)";

      var res = Point.parseAllCoords(coords);

      expect(res.length).to.equal(4);
      expect(res[0].x).to.equal(4);
      expect(res[0].y).to.equal(3);
      expect(res[1].x).to.equal(5);
      expect(res[1].y).to.equal(2);
      expect(res[2].x).to.equal(1);
      expect(res[2].y).to.equal(1);
      expect(res[3].x).to.equal(1);
      expect(res[3].y).to.equal(2);
    });
  });
});

describe('Point', function () {
  describe('parseToCoord1', function () {
    it('When coords given, then the x, y must be correct', () => {
      const coord = "(4,3)";

      var xy = Point.parseToCoord(coord);

      expect(xy[0]).to.equal(4);
      expect(xy[1]).to.equal(3);
    });
  });
});

describe('Point', function () {
  describe('parseToCoord2', function () {
    it('When coords given, then the x, y must be correct', () => {
      const coord = "(4 3)";

      var xy = Point.parseToCoord(coord);

      expect(xy[0]).to.equal(4);
      expect(xy[1]).to.equal(3);
    });
  });
});

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
  describe('determineMinimumOfArray1', function () {
    it('When points array given, then the minimum must be correct', () => {
      const pA = new Point(1, 1);
      const pB = new Point(4, 4);
      const pC = new Point(6, 1);
      const points = [pA, pB, pC];

      var value = Point.determineMinimumOfArray(points);

      expect(value).to.equal(3.605551275463989);
    });
  });
});

describe('Point', function () {
  describe('determineMinimumOfArray2', function () {
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
