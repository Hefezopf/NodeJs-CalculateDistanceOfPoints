const { Point } = require('./Point');

var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    const p1 = new Point(1, 4);
    const p2 = new Point(2, 3);
    const p3 = new Point(3, 2);
    const p4 = new Point(4, 1);
    
    const points = [p1, p2, p3, p4];
    
    response.write("determineMinimum:" + Point.determineMinimum(p1, p2));
    response.end("\ndetermineMinimumOfArray:" + Point.determineMinimumOfArray(points));    

}).listen(8080);

console.log('Server started');