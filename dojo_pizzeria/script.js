function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.rustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var p3 = pizzaOven("Stuffed", "Pesto", ["mozzarella", "Cheddar"], ["extra cheese", "black olives", "onions"]);
var p4 = pizzaOven("Cheesy Bites", "White Garlic Sauce", ["Goat Cheese", "mozzarella"], ["olives", "onions", "sasuge"]);

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);