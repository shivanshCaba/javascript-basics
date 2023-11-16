// Arrow functions=> just another way to write normal functions without having to use the function keyword

// function addition(a,b){
//     console.log(a+b)
// }

// addition(5,6)

// arrow()
// let add = (c,f)=>{
//     console.log(c+f)
// }
// add(3,4)

//  arrow function and callbacks
// function addition(a,b, arrow=(answer)=>{console.log(answer)} ){
//     let ans = a+ b; //10sec
//     arrow(ans);
// }
// addition(2,5)

// arrow function and objects

let person = {
    name: "Krrish",
    father: "Rohit mehra",
    bestFriend: "Jaadu",

    saveTheWorld: function(){
        console.log(this.name, "with his bestfriend", this.bestFriend, "will save the world")
    },
    prettyZinta: ()=>{
        console.log(person.name, "with his bestfriend", person.bestFriend, "will dance with pretty zinta")
    }
}
person.saveTheWorld();
person.prettyZinta();