// let person ={
//     name: "mayank",
//     height: "5'10",


//     describe : function(age){
//         console.log("This is ", this.name, this.favourite, age)
//         return `I am ${this.height}`
//     }
// }

// person.favourite = "cricket"
// let d = person.describe(21);
// console.log(d)


// apply(), bind(), call()



// call()
let person ={
    name: "mayank",
    height: "5'10",
    describe : function(age, color){
        console.log("This is ", this.name, this.height, age, color)
        return `I am ${this.height}`
    }
}
let person1 ={
    name: "vanshika",
    height: "5'3"
}

// person.describe.call(person1, 23, "pink")
// person.describe.apply(person1, [23, "pink"])

let store = person.describe.bind(person1);
store()