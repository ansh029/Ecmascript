
let a=['chaitrali','vishwajeet','shrutika','anshul'];

for(let x=0;x<a.length;x++){
 
 console.log(a[x]);
}


for(let x in a){
    console.log(a[x]);
}


a.forEach(element => {
    console.log(element)
});