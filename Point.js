class Point {

    constructor(xxx, yyy) {
        this.x = xxx;
        this.y = yyy;
    }

    get x(){
        return this.x;
    }   

    set x(xx){
        this.x = xx;
    }

    static determineMinimum(p1, p2) {
        console.log("p1.x" + p1.x);
        return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2));
    }

    static determineMinimumOfArray(points) {
       // console.log('points.length'+points.length);
        //console.log('points'+points[0].x);
        if (points.length < 1) {
            throw new IllegalArgumentException("too less points");
        }
        var min = 999999;
        for (var i = 0; i < points.length; i++) {
            startPoint = points[i];
            if (startPoint == null) {
                throw new IllegalArgumentException("");
            }
            min = calculate(points, startPoint, min, i);
        }

        return min;
    }

    static calculate(points, startPoint, min, startVal) {
        for (var i = startVal + 1; i < points.length; i++) {
            minTemp = determineMinimum(startPoint, points[i]);
            if (minTemp < min) {
                min = minTemp;
            }
        }
        return min;
    }
}

/*
const p1 = new Point(1, 4);
const p2 = new Point(2, 3);
const p3 = new Point(3, 2);
const p4 = new Point(4, 1);

const points = { p1, p2, p3, p4 };

console.log("determineMinimum:" + Point.determineMinimum(p1, p2));
console.log("determineMinimumOfArray:" + Point.determineMinimumOfArray(points));
*/
module.exports = { Point }
