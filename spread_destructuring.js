// let obj1 = {
//     childObj1:{
//         name:"mouse",
//         color: "white"
//     },
//     childObj2:{
//         name: "cat",
//         color: "golden"
//     }
// }

// let a = obj1.childObj1;
// let b = obj1.childObj2;
// console.log(a)
// console.log(b)
// Destructuring

// let {childObj1, childObj2} = obj1;
// console.log(childObj1)
// console.log(childObj2)

// let aniket = {
//     profession: "sir",
//     height: "mujhse 1 inch lambe"
// }

// let {profession, height} = aniket;
// console.log(profession, height)

// spread operator (...)

let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9];
// console.log(arr1.concat(arr2))

let arr2 = [...arr1,6,7,8,9]
console.log(arr2)