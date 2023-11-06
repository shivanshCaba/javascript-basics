// closures - > when a function is bundled with its lexical scope elements is called closures

function x(){
    let a = 90;
    function y(){
       console.log(a) 
    }
    return y;
}


let z = x();
z()


