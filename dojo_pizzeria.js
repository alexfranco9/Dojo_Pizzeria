function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni","sausage"])
console.log(p1)

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta",], ["mushrooms", "olives", "onions"])
console.log(p2)

var p3 = pizzaOven("thin crust", "BBQ", "provolone", ["pepperoni", "ham", "pineapple"])
console.log(p3)

var p4 = pizzaOven("New York Style", "pesto", "cheddar", ["bacon", "spinach", "onions"])
console.log(p4)

// *** Bonus Challange: create a function called randomPizza that uses Math.random() to create a random pizza.*** work in progres ...

function randomPizza()