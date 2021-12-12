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