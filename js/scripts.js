// Business Logic -----------------

function Pizza(size, premiumSauce, premiumCheese, meatTopping, veggieTopping, price) {
  this.size = size;
  this.premiumSauce = premiumSauce;
  this.premiumCheese = premiumCheese;
  this.meatTopping = meatTopping;
  this.veggieTopping = veggieTopping;
  this.price = 10;
}

Pizza.prototype.calcPrice = function() {
  if (this.size !== "Small") {
      this.price += 5;
  }
  if (this.premiumSauce !== undefined) {
      this.price += 1;
  }
  if (this.premiumCheese !== undefined) {
      this.price += 1;
  }
  if (this.meatTopping.length > 0) {
      this.price = this.price + this.meatTopping.length * 3;
  }
  if (this.veggieTopping.length > 0) {
      this.price = this.price + this.veggieTopping.length * 2; // ----------- meat and veggie choices need to push to array for method to work 
  }
}

// User Interface Logic ----------------

$(document).ready(function() {
  $("form#pie-builder").submit(function(event) {
    event.preventDefault();

    const pizzaSize = $("select#pie-size").val();
    const pizzaSauce = $("select#pie-sauce").val();
    const pizzaCheese = $("select#pie-cheese").val();
    const pizzaMeat = [];
    const pizzaVeg = [];
    const pizzaPrice = 10;

    /* Template: $("input:checkbox[name=type]:checked").each(function(){
    yourArray.push($(this).val()); ---------- to test, bookmark stackoverflow page if works */

    $("input:checkbox[name=meat]:checked").each(function(){
      pizzaMeat.push($(this).val());
    });
    
    $("input:checkbox[name=veg]:checked").each(function(){
      pizzaVeg.push($(this).val());
    });

    let pizzaOrder = new Pizza(pizzaSize, pizzaSauce, pizzaCheese, pizzaMeat, pizzaVeg, pizzaPrice);
    let finalTotal = pizzaOrder.calcPrice();

    console.log(pizzaOrder);
    console.log(finalTotal);

  });
});