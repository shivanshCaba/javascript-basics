let str = "I am a 'good' am am boy";
// console.log(str, truth)
console.log(str.length)
console.log(str.charAt(5))
console.log(str.replaceAll("am", "was"))
// console.log(truth.slice(0,8))
// console.log(truth.slice(8))
// let nstr = str.split(" ");
// console.log(nstr)

let truth = 'Shivansh is a "good" boy';
console.log(truth.toUpperCase())
console.log(str.toLowerCase())

console.log(truth.substring(0,3))
console.log(truth.substr(0,3))
console.log(str + truth)
console.log(str.concat( truth))


let tr = "                  sndfsgjf,mns                 sfuiosn f                    "
// console.log(tr.trimEnd())
// console.log(tr.trimStart())
// console.log(tr.trim())

let beechkaspaceremover = tr.trim().split(" ");
// beechkaspaceremover = beechkaspaceremover.split(" ");

let ans = ""; //=> ans =  s+h -> shivan
// console.log(beechkaspaceremover)

for(let i in beechkaspaceremover){
    if(beechkaspaceremover[i]==' '){

}else{
    ans = ans+beechkaspaceremover[i];
}
}

// console.log(ans)


// special characters or template literals
// let mam = "This is a \"string\" ";

// template literal  
// let template =  `asfjhuilsfjks
//                 sfjsnfjsfsm;falsefs
//                 smnfjklhnslkfn;asgsdf
//                 asshosjhuijskfgk
//                 sdflgkgetComputedStylegdjghnjk
//                 gdkjbnsgjlkgndlkg`

// console.log(template)
let name = ["geetanajali", "mam", "diviniti", "shivansh", "sirrr"];

for(let i in name){
    console.log( `${name[i]} is absent today`);
}
