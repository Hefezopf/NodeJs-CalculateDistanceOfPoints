
const { Point } = require('./Point');
const { PointUtil } = require('./PointUtil');

console.log('Start App...');

points = [];
if (process.argv.length == 3) {
  points = PointUtil.parseAllCoords(process.argv[2]);
} else {
  pointsFixed = [];
  pointsFixed[0] = new Point(1, 1);
  pointsFixed[1] = new Point(1, 3);
  pointsFixed[2] = new Point(4, 4);
  pointsFixed[3] = new Point(6, 1);
  points = pointsFixed;
}

console.log("Minimum distance of all points = " + PointUtil.determineMinimumOfArray(points));