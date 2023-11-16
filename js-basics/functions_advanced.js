// Named function -> in function refresher.js
// Anonymous Functions -> Unnamed functions

// function(parameters){
//     body of function
// }

let divi = function(x,y){
    console.log(x+y);
    return (x-y);
}

let ans = divi(88,21);
console.log(ans)

// Immediately Invoked Function Expressions (IIFE)

// let divi = (function(){
//     let a = 90;
//     let b = 88

//     console.log(a + b);
//     return ("tu pagal nhi hai")
// }) ()

// console.log(divi)