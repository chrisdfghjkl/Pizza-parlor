// Business Logic -----------------

function Pizza(size, premiumSauce, premiumCheese, meatTopping, veggieTopping) {
  this.size = size;
  this.premiumSauce = premiumSauce;
  this.premiumCheese = premiumCheese;
  this.meatTopping = meatTopping;
  this.veggieTopping = veggieTopping;
  this.price = 10;
}

Pizza.prototype.toppingDisplay = function() {
  if (this.meatTopping.length === 0) {
    this.meatTopping = "N/A";
  } else if (this.meatTopping.length > 0) {
    this.meatTopping = this.meatTopping.join(", ");
  }
  if (this.veggieTopping.length === 0) {
    this.veggieTopping = "N/A";
  } else if (this.veggieTopping.length > 0) {
    this.veggieTopping = this.veggieTopping.join(", ");
  }
};

Pizza.prototype.calcPrice = function() {
  if (this.size === "Small") {
    this.price += 0;
  } else if (this.size === "Large") {
    this.price += 5
  } else if (this.size === "N/A") {
    this.price = 0
  }
  if (this.premiumSauce !== "N/A") {
      this.price += 1;
  }
  if (this.premiumCheese !== "N/A") {
      this.price += 1;
  }
  if (this.meatTopping.length > 0) {
      this.price = this.price + this.meatTopping.length * 3;
  }
  if (this.veggieTopping.length > 0) {
      this.price = this.price + this.veggieTopping.length * 2;  
  }
};

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


    $("input:checkbox[name=meat]:checked").each(function(){
      pizzaMeat.push($(this).val());
    });
    
    $("input:checkbox[name=veg]:checked").each(function(){
      pizzaVeg.push($(this).val());
    });

    let pizzaOrder = new Pizza(pizzaSize, pizzaSauce, pizzaCheese, pizzaMeat, pizzaVeg, pizzaPrice);
    
    pizzaOrder.calcPrice();
    pizzaOrder.toppingDisplay();
    

    $("#size").html(pizzaOrder.size);
    $("#sauce").html(pizzaOrder.premiumSauce);
    $("#cheese").html(pizzaOrder.premiumCheese);
    $("#meat").html(pizzaOrder.meatTopping);
    $("#veg").html(pizzaOrder.veggieTopping);

    $("#price").html(pizzaOrder.price + ".00");

    $(".bill-details").slideDown();
    $("#hider").slideUp();
    $("#new-order").fadeIn();

    $("#new-order").click(function() {
      location.reload();
    });

  });
});