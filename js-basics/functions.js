// functions are used to make a code dynamic in nature

// for(let i=1;i<=10;i++){
//     console.log(2*i);
// }

// Process to implement functions -> 1)Function Definition/Declaration, 2)Function Calling(Invoking the function)

// Function definition
// function func_name(parameter1, parameter2, parameter3..........paramert_n){
//     what work will this function do
// }


//  WAP to perform addition on different values;

// function addition(shiv, div){
//     console.log(shiv+div);
// }

// addition(23, 45);
// addition(2123, 564);
// addition(5445, 2142);
// addition(26773, 40905);


// WAP to print table of different numbers

let arr = [2,3,4,5,6,7];

function table(num){

    for(let i =1;i<=10;i++){
        console.log(num*i);
    }
}

// table(arr[0])
// table(arr[1])
// table(arr[2])
// for(let i in arr){
//     table(arr[i])
// }

// Functions-> Types -> 1) NAmed Functions 2) Anonymous Functions 3) Immediately Invoked Function Expressions (IIFE)

function addition(shiv, div){
    console.log(shiv+div);
    let ans = shiv + div
    return ans;
}

console.log("return wala ", addition(23, 45));

let friend = addition(45,33);
console.log("friend",friend)