// error handling ->1) to handle the error so that the execution doesn't stop. 2) to create custom errors 

// try{

// }
// catch(erR){

// }


try{
    console.log(x);
}
catch(error){
    console.log(error)
}


console.log("I am still working")

// 2) Custom errors
let numerator = 66;
let denominator = 90;

try{
    if(denominator == 0){
        // throw ("Cannot divide by 0")
        throw({type:"Logical Error", msg:"Cannot divide by 0 stupid"})
    }
    console.log(numerator/denominator)

}
catch(geet_diviniti){
    console.log(geet_diviniti.type+":", geet_diviniti.msg)
}

// finally-> this block of code will always run no matter if there is an error or not

try{
    if(denominator == 0){
        // throw ("Cannot divide by 0")
        throw({type:"Logical Error", msg:"Cannot divide by 0 stupid"})
    }
    console.log(numerator/denominator)

}
catch(geet_diviniti){
    console.log(geet_diviniti.type+":", geet_diviniti.msg)
}
finally{
    console.log("M toh hmesha execute hounga hi hounga")
}