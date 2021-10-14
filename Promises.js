function myDisplayer(some) {
    console.log(some);
}

let myPromise = new Promise(function (myResolve, myReject) {
    let x = 2;

    // The producing code (this may take some time)

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("It has error");
    }
});


//consuming code

myPromise.then(
    function (value) { myDisplayer(value); },
    function (error) { myDisplayer(error); }
).catch(
    err => console.log(err)
).finally(
    console.log("finally returns") 
);