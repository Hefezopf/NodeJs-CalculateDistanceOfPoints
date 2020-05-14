
const { Point } = require('./Point');

console.log('App started');

const p1 = new Point(1, 4);
const p2 = new Point(2, 3);
const p3 = new Point(3, 2);
const p4 = new Point(4, 1);

const points = { p1, p2, p3, p4 };

console.log("determineMinimum:" + Point.determineMinimum(p1, p2));
console.log("determineMinimumOfArray:" + Point.determineMinimumOfArray(points));