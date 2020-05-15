
const { Point } = require('./Point');

console.log('Start App...');

const pA = new Point(1, 1);
const pB = new Point(1, 3);
const pC = new Point(4, 4);
const pD = new Point(6, 1);

const points = [pA, pB, pC, pD];

console.log("Minimum distance of all points = " + Point.determineMinimumOfArray(points));