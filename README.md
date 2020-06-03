# NodeJs-CalculateDistanceOfPoints
The Javascript NodeJs Program calculates the minimum and maximum distance of points.

Sample Coordinates: A(1, 1), B(1, 3), C(4, 4), D(6, 1) 

![Coordinates](src/resources/Coordinates.png "Coordinates")

Minimum distance of all points = 2.0

Maximum distance of all points = 5.385164807134504


## Prepare

Setup nodejs modules

**npm install**


## Test

Run JUnit Tests

**npm test**


## Run

Run the app

### CMD Version

Run the command line app

**npm run start**

or 

**node src/nodeJsCalcPointsApp.js**

>Start App...
>
>Minimum distance of all points = 2.0
>
>Maximum distance of all points = 5.385164807134504

or run with params

**npm run start "(4,3) (5,2) (1,1) (1,2)"**

or

**node src/nodeJsCalcPointsApp.js "(4,3) (5,2) (1,1) (1,2)"**

Calling the app with this params should result in:

>Start App...
>
>Minimum distance of all points = 1.0
>
>Maximum distance of all points = 4.123105625617661

Hint: Only use single digit numbers as point coordinates like (4,3)!


### Web Version

Run the Web Version app

**node src/nodeJsCalcPointsWeb.js**

http://localhost:8080/


## CI/CD

Each commit to GitHub will result in a automated online CI/CD build.


### GitHub

GitHub Action CI/CD build:

https://github.com/Hefezopf/NodeJs-CalculateDistanceOfPoints/actions


### Travis

Travis CI/CD build:

https://travis-ci.com/github/Hefezopf/NodeJs-CalculateDistanceOfPoints
