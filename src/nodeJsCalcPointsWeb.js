const { Point } = require('./Point');

var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    const pA = new Point(1, 1);
    const pB = new Point(1, 3);
    const pC = new Point(4, 4);
    const pD = new Point(6, 1);
    
    const points = [pA, pB, pC, pD];
    
    response.write("\nMinimum distance of all points = " + Point.determineMinimumOfArray(points));    
    response.end("\nMaximum distance of all points = " + Point.determineMaximumOfArray(points));    

}).listen(8080);

console.log('Server started');