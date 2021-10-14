// define ?

var a=20;
let b=10;
const c=30;

//where to use?


function d(){

 var p=30;
 
 {
     let q=40;
     const r=50;

     console.log(p);
 }

}

//d();


//whats the diff between let and constant?


function u(){
 
    {
        let q=40;
        const r=50;
        r=60;
        console.log(r);
    }
  
   }
   u();
