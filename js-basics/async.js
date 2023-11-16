// setTimeOut()


// setTimeout(function(){
//     console.log("I am awesome")
// }, 3000)

// let x = 8+9
// console.log(x);
// console.log("Working sdfgghjfhj");



// callbacks, promises, async await

// callbacks

function displayer(wwww){
    console.log(wwww)
}

// function addition(a,b){
//     let ans = a+ b; //10sec
//     return ans;
// }
// addition(2,5)
// displayer(value)

// // callback
function addition(a,b, c){
    let ans = a+ b; //10sec
    c(ans)
}

addition(2,5, displayer)


// async await 
function displayer(ans){
    console.log(ans)
}
async function addition(a,b){
    let ans = await a+ b; //10sec
    displayer(ans);
}

addition(22,33)

// async function dhireRam(){
//      setTimeout(async function(){
//         await console.log("I am awesome")
//     }, 3000)

//     console.log("I am after await");
// }

// dhireRam();

// Promises

// let prom = new Promise(function(resolve, reject){

//     let ans = "No";
//     if(ans == "Yes"){
//         resolve("Usne haa bol diya")
//     }else{
//         reject("Muh pr beztii")
//     }
// })

// prom.then(
//     function(resolveMsg){console.log(resolveMsg)}
// ).catch(
//     function(errorMsg){console.log(errorMsg)}
// )


// console.log(new Date())

// const d = new Date("January 13, 2014 11:13:00");
// console.log(d.getMonth())

// let n = -944.85465487
// console.log(Math.max(3,5,56732,121,1))

// let otp = Math.random()
// console.log(otp)
// wap to generate 4 digit otp 5 times 

// for(let i=0;i<5;i++){
//     let otp = Math.random()
//     otp = otp * 10000
//     console.log(Math.trunc(otp))
// }
// for(let i=0;i<5;i++){
//     let otp = Math.random()
//     otp = otp.toPrecision(4)*10000;
//     console.log(otp)
// }

// NOTE completed Math library, number methods.....