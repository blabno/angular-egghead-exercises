##Exercise 3 : Sharing data between controllers

The goal of this exercise is to present the data exchange between controllers.

###Before you start, please refer to:
* [angularjs-the-dot](https://egghead.io/lessons/angularjs-the-dot)
* [angularjs-sharing-data-between-controllers](https://egghead.io/lessons/angularjs-sharing-data-between-controllers)


###Exercise
1. In **controllers.js**:
    * Add a ***bind*** module
    * Create a **factory** that returns variable **direction**
    ```
    {direction: "Direction? Left and right!"}
    ```
    * Based on the video **angularjs-sharing-data-between-controllers** edit controllers **LeftCtrl** and **RightCtrl**
2. In **index.html**: 
    * Comment out the **CENTER** div, which will make typing text into the **left** input will not display a **right**
    * Based on the video **angularjs-the-dot** make changes to the **index.html** file to connect (bind) all three inputs to each other.


###Completion
Expected result of this exercise is to display two inputs binded together by a factory variable model with default value.

Good luck!
