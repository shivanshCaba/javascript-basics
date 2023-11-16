// Chapter 3 
// Q3

let correct_num = 5;
let user_num = 10;

while(user_num != correct_num){
    console.log("try again");

    user_num--;
}

// // Q4 mean of 5 number = average of any 5 numbers
let numbers = [5,10,15,20,25]

let sum = 0;
let mean = 0;
for(let i=0;i<numbers.length;i++){
    sum = sum + numbers[i];
}
mean = sum/numbers.length ;
console.log(mean);



// Chapter 4
// console.log("    harry\"    ")

// includes(), startsWith(), endsWith()

let str= "I am a boy";

console.log(str.includes("geetanjali"))
console.log(str.startsWith("I"))
console.log(str.endsWith("y"))

console.log(str.slice(7,9))

str[4] = "x"
console.log(str)
// strings are immutable -> their value can't be changed

// Chapter 5
// Q1

let user_arr =[45, 67, 88, 0, 98,32,44]

let arr = [4,5,6,7]

// for(let i in user_arr){
//     if(user_arr[i] == 0){
        
//     }else{
//         arr.push(user_arr[i]);
//     }
// }
// console.log(arr)

// for(let i in user_arr){
//     if(user_arr[i] == 0){
//         continue;
//     }
//     arr.push(user_arr[i]);
// }
// console.log(arr)


for(let i in user_arr){
    if(user_arr[i]==0){
        break;
    }
    arr.push(user_arr[i])
}

console.log(arr);

