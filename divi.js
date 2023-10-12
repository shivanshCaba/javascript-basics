// let correct_num = 5;
// let user_num = 10;

// while(user_num != correct_num){
//     console.log("try again");
//     user_num--;
// }
// let sum = 0;
// let numbers = [5,10,15,20,25]
// let mean;
// for(let i=0;i<numbers.length;i++){
//     sum = sum + numbers[i];
//      mean = sum/numbers.length ;
// }
// console.log(mean);

let user_arr =[45, 67, 88, 0, 98,32,44]

let arr = [4,5,6,7]

for(let i in user_arr){
    if(user_arr[i]==0){
        break;
    }
    arr.push(user_arr[i])
}

console.log(arr);