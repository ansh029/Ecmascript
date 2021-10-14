function myFunction(a,b) {

  console.log("test");

    return a * b;
                 
  }

  //with multiple statements
  myFunction=(a,b)=>{

     console.log("test");

    return a * b;
  }


  //with single statement

  myFunction=(a,b)=>a*b;

  myFunction2=a=>a*12;

  console.log(myFunction2(4));

