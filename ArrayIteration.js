const numbers = [45, 4, 9, 16, 25];

// numbers.forEach(element => {
//     console.log(element)
// });

// numbers.map(element => {
//   console.log(element>15) ;
// });


// let x= numbers.filter(element => {
//    return element>15
// });

// console.log(x)

let x= numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
    return total + value;
  }

console.log(x)





