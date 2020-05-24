class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

	static parseAllCoords(allCoords) { // "(4,3) (5,2) (1,1) (1,2)""
        var points = [];
        var coords = allCoords.replace("[^\\w\\d]", "").toLowerCase().split(" ");
        for (var coord in coords) {
            var xy = Point.parseToCoord(coords[coord]);
            points[coord] = new Point(xy[0], xy[1]);
        }

		return points;
	}
	
	static parseToCoord(coords) {
		var res = new Array(2);
		var xy = coords.replace("[^\\w\\d]", "").toLowerCase().split("");
        res[0] = parseInt(xy[1], 10);
        res[1] = parseInt(xy[3], 10);

		return res;
    }
        
    static determineMinimum(p1, p2) {
        return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2));
    }

    static determineMinimumOfArray(points) {
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
