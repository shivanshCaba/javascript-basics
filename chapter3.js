// let x = 90;
// x = x + 5;
// x += 5;
//  x -= 9;
//  x*=6;
//  x/=6;
// // increment operartor and decrement operator -> increase or decrease by 1
// x++; //x = x+1
// x--; //x = x-1



// loops -> for, for-in, for of, while

// for -> for(start_condtion; end_condition; update_condition){
//     work to do
// }
// Wap to print table of 2
// console.log(2*1)
// console.log(2*2)
// console.log(2*3)
// console.log(2*4)
// console.log(2*5)
// console.log(2*10)

let i =1;
for(i;i<=10;i++){
    console.log( 2 * i);
}

// Wap to print table of 17 until 20
for(let x=1;x<=20; x++){
    console.log( 17 * x);
}

// while loop 
// while(ending condition){
//     work to do;
//     update condition;
// }
// Wap to print table of 4

let x = 1;
while(x<=10){
    console.log( 4 * x);
    x++;
}


// iterables -> string, arrays
// string -> 'a-z', 'A-z' or 'a-z + numbers' or 'a-z + numbers+ special characters'

//          0123456789 
let fact = "shivansh is awesome";
console.log(fact[1]);
console.log(fact.charAt(1));
console.log(fact.length);
for(let i=0;i<19;i++){
    console.log(fact[i])
}

// objects