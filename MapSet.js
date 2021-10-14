// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);


//console.log(fruits.get("apples"));


// fruits.forEach(function(value, key) {
//     console.log(value);
//   })



// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");

letters.forEach (function(value) {
    console.log(value);
  })