// Javascript Order Form

// Written by: Tim Burt

// Get the buttons by ID
let add,del,order;
add = document.getElementById("add");
del = document.getElementById("del");
order = document.getElementById("order");

// Get Form Items & Total
let item,price,total;
item = document.getElementById("item");
price = document.getElementById("price");
total = document.getElementById("total");

// Define Prices
// Pizza Group
const small = 9.99;
const large = 15.99;
const xlarge = 24.99;
const topping1 = 1.49;
const topping2 = 2.49;
const topping3 = 3.99;

let s,l,xl,t;
s = document.getElementById("s");
l = document.getElementById("l");
xl = document.getElementById("xl");
t = document.getElementById("t");

let S,L,XL,T;
S = "Small Pizza";
L = "Large Pizza";
XL = "X-Large Pizza";
T = "Toppings:";

// Calzone Group
const zone = 7.99;
const bolli = 7.99;
const cheese = 1.49;

let z,b,c;
z = document.getElementById("z");
b = document.getElementById("b");
c = document.getElementById("c");

let Z,B,C;
Z = "Calzone";
B = "Strombolli";
C = "Cheese:";

// Get the Modal Form
let modal;
modal = document.getElementById("orderForm");

// Open Form
add.onclick = function() {
     modal.style.display = "block";
}

// Close Form
let update;
update = document.getElementById("update");

// Order Form Functions
update.onclick = function() {

     // Pizza Group
let pizza;
let desc;
let top;
if (s.checked) {
    pizza = small;
    desc = S + " - ";
    top = T + " <br>" + t.value;
    calc = pizza + topping1;

    // Output
    document.getElementById("item").innerHTML = desc + top;
    document.getElementById("price").innerHTML = "$" + calc;
}
else if (l.checked) {
     desc = L + " - " ;
     pizza = large;
     top = T + " <br>" + t.value;
     calc = pizza + topping2;

     // Output
    document.getElementById("item").innerHTML = desc + top;
    document.getElementById("price").innerHTML = "$" + calc;
}

else if (xl.checked) {
     desc = XL + " - ";
     pizza = xlarge;
     top = T + " <br>" + t.value;
     calc = pizza + topping3;

     // Output
    document.getElementById("item").innerHTML = desc + top;
    document.getElementById("price").innerHTML = "$" + calc;
}

else {
     document.getElementById("item").innerHTML = "";
     document.getElementById("price").innerHTML = "";
     document.getElementById("total").innerHTML = "$0.00";
}

     // Calzone Group
let Zone;
let desc2;
let cheeses;
if (z.checked) {
     Zone = zone;
     desc2 = Z + " - ";
     cheeses = C + " <br>" + c.value;
     calc2 = Zone + cheese;

     // Output
     document.getElementById("item2").innerHTML = desc2 + cheeses;
     document.getElementById("price2").innerHTML = "$" + calc2;
}

else if (b.checked) {
     Zone = bolli;
     desc2 = B + " - ";
     cheeses = C + " <br>" + c.value;
     calc2 = Zone + cheese;

     // Output
     document.getElementById("item2").innerHTML = desc2 + cheeses;
     document.getElementById("price2").innerHTML = "$" + calc2;
}

else {
     document.getElementById("item2").innerHTML = "";
     document.getElementById("price2").innerHTML = "";
     document.getElementById("total").innerHTML = "$0.00";
}
     // Total Item
     let newTotal;
     newTotal = calc + calc2;
     document.getElementById("total").innerHTML = "$" + newTotal;

     // Update Items
     modal.style.display = "none";
}

// Clear Order
del.onclick = function() {
     document.getElementById("item").innerHTML = "";     
     document.getElementById("item2").innerHTML = "";     
     document.getElementById("price2").innerHTML = "";
     document.getElementById("total").innerHTML = "$0.00";
}
