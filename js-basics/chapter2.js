console.log('hello')

let x = 20;
let y = 21;

// Comparison/Relational
// ==,
// ===
// if(x==y){
//     console.log("True")
// }else{
//     console.log("False");
// }

// let z = "30";
// let num = 30;

// if(z==num){
//     console.log("True")
// }else{
//     console.log("False");
// }

// ===

// if(z===num){
//     console.log("True")
// }else{
//     console.log("False");
// }

// !=, !==

// let d = 5;
// let val = '5';

// if(d!==val){
//     console.log("Not equal")
// }else{
//     console.log("equal")
// }

// console.log(!false) //-> keywords -> false true 

// Conditional Statements
// if else
// let z = "30";
// let num = 30;

// if(z==num){
//     console.log("True")
// }else{
//     console.log("False");
// }

// if else if
// let day = "Thursday";

// if(day === "Monday")
// {
//     console.log("Aryyy Yaaarrrr!!!!")
// }
// else if(day === "Friday")
// {
//     console.log("Friday Hai ....")
// }
// else if(day === "Saturday")
// {
//     console.log("Kudi saturday sat krti hai")
// }
// else if(day=== "Sunday")
// {
//     console.log("Sad and Tired")
// }
// else if(day=== "Tuesday")
// {
//     console.log("Tuesday")
// }
// else if(day=== "Wednesday")
// {
//     console.log("Wed")
// }
// else {
//     console.log("Thursday")
// }
// // nesting of conditions
// let con = 14;
// if(con>15)
// {
//     console.log("greater than 15");
//     if(con>16)
//     {
//         console.log("greater than 16");
//         if(con>18)
//         {
//             console.log("greater than 18");
//             if(con>19)
//             {
//                 console.log("greater than 19");
//             }
//             else{
//                 console.log("less than 19")
//             }
//         }
//         else{
//             console.log("less than 18")
//         }
//     }
//     else{
//         console.log("less than 16")
//     }
// }
// else{
//     console.log("less than 15");
//     if(con<14)
//     {
//         console.log("less than 14")
//     }
//     else{
//         console.log(" It is equal to 14 bro")
//     }
// }

// Switch statement


// switch(condition){
//     case "on":
//     case "off":
//     default:
// }

let a = 67;
let b =87;


switch(a)
{
    case "on":
        console.log("Upar pankha chalta hai");
        let b = 90;
        break;
    case "off":
        console.log("niche baby rota hai");
        break;
    default:
        console.log("Sote sote bhook lagi");
        break;
}

console.log(a);
console.log(b);
console.log("I am outside switch")


// scope
const khiladi = 786;

console.log(khiladi)


// ternary operator

let e = "even";

// if(e=="even"){
//     console.log("even")
// }else{
//     console.log("odd");
// }

(e=="even")?console.log("even"):console.log("odd");