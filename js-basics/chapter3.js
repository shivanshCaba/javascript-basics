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


// iterables -> string, arrays (for, for-of)
// non-iterables->objects (for-in)
// string -> 'a-z', 'A-z' or 'a-z + numbers' or 'a-z + numbers+ special characters'

//          0123456789 
let fact = "shivansh is awesome";
console.log(fact[1]);
console.log(fact.charAt(1));
console.log(fact.length);
for(let i=0;i<19;i++){
    console.log(fact[i])
}

// objects -> works in key-value pairs
let car = {
    name : "lamborghini",
    color: "white",
    speed: 200
}

// console.log(typeof(car));
// console.log(car.name);
// console.log(car.color);
// console.log(car["speed"]);


// Arrays -> type object

let arr = [ 23, 45, 67, "shivy" , 67868,  {name: "shivansh", height: "5'9"}  ]

// console.log(arr)

// console.log(arr[0])
// console.log(arr[3])
// console.log(arr[5].name);

// let hoshiyar = arr[5]
// console.log(hoshiyar.name)


// Arrays and loops
let arr1 = [ 23, 45, 67, "shivy" , 67868,  {name: "shivansh", height: "5'9"}  ]

// console.log(arr1[0])
// console.log(arr1[1])
// console.log(arr1[2])
// console.log(arr1[3])
// console.log(arr1[4])
// console.log(arr1[5])

// for(let i=0; i<6; i++){
//     console.log(arr1[i])
// }
//  for - of
// for (let item of arr1){
//     console.log(item)
// }

// objects and loops



let car1 = {
    name : "lamborghini",
    color: "white",
    speed: 200
}
// console.log(car1.name);
// console.log(car1.color);
// console.log(car1["speed"]);

// wrong loop
// for(let i=0;i<3;i++){
//     console.log(car1.i); // -> i = 0, 1, 2 -> car1.0 car1.1 car1.2
// }

// wrong loop
// for(let item of car1){
//     console.log(item);
// }

// for - in

for(let i in car1){
    console.log(car1[i])
}