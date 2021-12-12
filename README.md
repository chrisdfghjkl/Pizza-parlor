# Pizza Parlor
##### By Chris DePastene


### Description
Epicodus independent project for Object-Oriented JavaScript. Create a pizza parlor webpage that that allows the user to build a pizza they'd like to order and, using object constructors and prototype methods, store the selections and calculate a price

### Technologies Used
* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

### Testing
#
| Test        | Argument    | Expected Output |
| ----------- | ----------- | --------------- |
| It should return a Pizza object with two properties for toppings and size|const myPizza = new Pizza(["anchovies", "pineapple"], "medium");|Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }|
|It should return a Pizza object with six properties for toppings, size, and price|let myPizza = new Pizza("Small", "Pesto", "Fresh Mozzarella", ["sausage","anchovies"],["cherry tomatoes", "olives"],)|Pizza {size: 'Small', premiumSauce: 'Pesto', premiumCheese: 'Fresh Mozzarella', meatTopping: Array(2), veggieTopping: Array(2)}
|It should return a price based on Pizza object values|let myPizza = new Pizza("Small", "Pesto", "Fresh Mozzarella", ["sausage","anchovies"],["cherry tomatoes", "olives"],)|Expected Output: 22


### Setup/Installation Requirements
* Clone the repository to your desktop
* Navigate to the top level of the directory
* Open index.html in your browser

### Known Bugs
* None at this time

### License
[MIT] (https://opensource.org/licenses/MIT)

Copyright (c) 2021 Christopher DePastene
##### By Chris DePastene
#

### Description
Epicodus independent project for Arrays and Looping section. Create a web application that takes a number from the user and returns a range of numbers from 0 to the user inputted number with the following substitutions made within the returned range:

* Numbers that contain a 1: all digits are replaced with "Beep!"
* Numbers that contain a 2: all digits are replaced with "Boop!"
* Numbers that contain a 3: all digits are replaced with "Won't you be my neighbor?"

### Technologies Used
* HTML
* CSS
* Bootstrap

### Testing
#
| Test        | Argument    | Expected Output |
| ----------- | ----------- | --------------- |
| It should return an array with a 0 if the number 0 is inputted|0|[0]|
| It should return an array starting at 0 and ending at the argument number|5| [o, 1, 2, 3, 4, 5]
|It should it should identify the presence of the digit 1 in an array of numbers|5| True|
|It should replace array elements that include the digit '1' with a string 'TEST'|5|[0, "TEST", 2, 3, 4, 5]|
|It should return array that replaces instances of 3, 2, and 1 with: 'Won't you be my neighbor?', 'Boop!', and 'Beep!', ranked in that order of importance|13|[0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', "Won't you be my neighbor?"]|
|It should return the message 'You Broke It!' if negative number is input|-5|"You Broke It!"

### Setup/Installation Requirements
* Clone the repository to your desktop
* Navigate to the top level of the directory
* Open index.html in your browser

### Known Bugs
* None at this time

### License
[MIT] (https://opensource.org/licenses/MIT)
Copyright (c) 2021 Christopher DePastene