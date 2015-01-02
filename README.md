##Exercise 5 : Angular filters

The goal of this exercise is the creation and use simple filters.

###Before you start, please refer to:
* [angularjs-filters](https://egghead.io/lessons/angularjs-filters)
* [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
* [regular expression online] (https://regex101.com/)

###Exercise

* Complete **quote** filter, to place the text in quotation marks.
* Use it on  **citation**   and display the result in the right place of the table.
* Create a filter called **withoutH**, that will remove all the "H" and "h" characters from the text (**Hint:** try to use a method from the previous exercise) and then use it on the **title** in the table
* Review the following code (in particular regular expression) and then complete filter  **firstLetterUp**, whose purpose is to convert the first letter of the word to the large ones.
```
return text.replace(/([^\W_]+[^\s-]*) */g, function (text)
        {
            return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        });
```

* To use **firstLetterUp**  for each word in **someText**,  just add it behind **|** ```data.someText | firstLetterUp``` 
* Bind the contents of the upper text input(model) to display them inside the h3 tag and use on him default filter provided by angular: ```uppercase```
 
Good luck!
