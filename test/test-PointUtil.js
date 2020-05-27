const { Point } = require('../src/Point');
const { PointUtil } = require('../src/PointUtil');

var expect = require('chai').expect;

describe('PointUtil', function () {
  describe('parseAllCoords', function () {
    it('When all coords given, then the all x, y must be correct', () => {
      const coords = "(4,3) (5,2) (1,1) (1,2)";

      var res = PointUtil.parseAllCoords(coords);

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

  describe('parseToCoord1', function () {
    it('When coords given, then the x, y must be correct', () => {
      const coord = "(4,3)";

      var xy = PointUtil.parseToCoord(coord);

      expect(xy[0]).to.equal(4);
      expect(xy[1]).to.equal(3);
    });
  });

  describe('parseToCoord2', function () {
    it('When coords given, then the x, y must be correct', () => {
      const coord = "(4 3)";

      var xy = PointUtil.parseToCoord(coord);

      expect(xy[0]).to.equal(4);
      expect(xy[1]).to.equal(3);
    });
  });

  describe('determineMinimumOfArray1', function () {
    it('When points array given, then the minimum must be correct', () => {
      const pA = new Point(1, 1);
      const pB = new Point(4, 4);
      const pC = new Point(6, 1);
      const points = [pA, pB, pC];

      var value = PointUtil.determineMinimumOfArray(points);

      expect(value).to.equal(3.605551275463989);
    });
  });

  describe('determineMinimumOfArray2', function () {
    it('When points array given, then the minimum must be correct', () => {
      const pA = new Point(1, 1);
      const pB = new Point(1, 3);
      const pC = new Point(4, 4);
      const pD = new Point(6, 1);
      const points = [pA, pB, pC, pD];

      var value = PointUtil.determineMinimumOfArray(points);

      expect(value).to.equal(2.0);
    });
  });
});

