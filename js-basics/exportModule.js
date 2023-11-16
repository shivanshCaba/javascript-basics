let a = 88;


function addition(a,b){
    console.log(a+b);

}
function subtraction(a,b){
    console.log(a-b);

}
// export default addition;
// export {a, addition, subtraction}
// Creating a library like math

let ganit = {
    addition: function (a,b){
        console.log(a+b);
    
    },
    subtraction: function (a,b){
        console.log(a-b);
    
    }
}



export  {ganit as ganit}