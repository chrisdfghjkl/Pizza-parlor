Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Test: "It should return a Pizza object with six properties for toppings, size, and price"
Code: let myPizza = new Pizza("Small", "Pesto", "Fresh Mozzarella", ["sausage","anchovies"],["cherry tomatoes", "olives"],)
Expected Output: Pizza {size: 'Small', premiumSauce: 'Pesto', premiumCheese: 'Fresh Mozzarella', meatTopping: Array(2), veggieTopping: Array(2), …}
