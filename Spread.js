function addFourNumbers(num1,num2,num3,num4,num5,num6){
    return num1 + num2 + num3 + num4+num5+num6;
  }
  
  let fourNumbers = [1,3,2,4,5,6];
  
  //console.log(addFourNumbers(...fourNumbers));


let array1 = [3, 4, 5, 6];
let clonedArray1 = [1,2,...array1,9];

console.log(array1)
console.log(clonedArray1)

let obj1 = {x:'Hello', y:'Bye'};
let obj2 = {z:'abc'};
let clonedObj1 = {...obj1,...obj2}; // Spreads and clones obj1
// console.log(clonedObj1);