##Exercise 3 : Sharing data between controllers

The goal of this exercise is to present the data exchange between controllers.

###Before you start, please refer to:
* [angularjs-the-dot](https://egghead.io/lessons/angularjs-the-dot)
* [angularjs-sharing-data-between-controllers](https://egghead.io/lessons/angularjs-sharing-data-between-controllers)


###Exercise
* Based on the video **angularjs-the-dot** make changes to the **index.html** file to connect (bind) all three inputs to each other.
* Comment out the div **CENTER** in **index.html**, which will make, typing text into the **left** input will not display a **right** 
* In **Controllers.js** add a **bind** module 
``` var bind = angular.module('bind', []);```
* Create a **factory** that returns variable **direction**
```
bind.factory('Direction', function() {
    return {direction: "Direction? Left and right!"}
}); 
```
* Based on the video **angularjs-sharing-data-between-controllers** edit controllers **LeftCtrl** and **RightCtrl**

Good luck!
