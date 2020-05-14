class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static determineMinimum(p1, p2) {
        return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2));
    }

    static determineMinimumOfArray(points) {
        console.log('points', points);
        if (Object.keys(points).length <= 1) {
            throw new IllegalArgumentException("too less points");
        }
        var min = 999999;
        var i = 0;
        for (var point in points) {
            var startPoint = points[point]
            if (startPoint == null) {
                throw new IllegalArgumentException("");
            }
            min = Point.calculate(points, startPoint, min, i);
            i++;
        }

        return min;
    }

    static calculate(points, startPoint, min, startVal) {
        for (var i = startVal + 1; i < Object.keys(points).length; i++) {
            var minTemp = Point.determineMinimum(startPoint, points[i]);
            if (minTemp < min) {
                min = minTemp;
            }
        }
        return min;
    }
}

module.exports = { Point }
