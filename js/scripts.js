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
      this.price += 2;
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
      this.price = this.price + this.veggieTopping.length * 2;
  }
}