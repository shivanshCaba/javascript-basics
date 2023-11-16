// let car= {
//     name:"XUV",
//     color: "red",

//     description: function(speed){
//         console.log(this.name, this.color, speed)
//     }
// }


// car.name;
// car.description(100)

// call(), apply(), bind()

// call()
// let car= {
//     name:"XUV",
//     color: "red",

//     description: function(brand, weight){
//         console.log(this.name, this.color, this.speed, brand, weight)
//     }
// }
// let car1= {
//     name:"XUV",
//     color: "yellow",
//     speed: "200kmph",
// }

// car.description.call(car1,"maruti", 60)
// car.description.call(car2,"maruti", 60)
// car.description.call(car3,"maruti", 60)

// apply()
// let car= {
//     name:"XUV",
//     color: "red",

//     description: function(brand, weight){
//         console.log(this.name, this.color, this.speed, brand, weight)
//     }
// }
// let car1= {
//     name:"XUV",
//     color: "yellow",
//     speed: "200kmph",
// }

// car.description.apply(car1, ["maruti", 100])

// bind()
let car= {
    name:"XUV",
    color: "red",

    description: function(brand, weight){
        console.log(this.name, this.color, this.speed, brand, weight)
    }
}
let car1= {
    name:"XUV",
    color: "yellow",
    speed: "200kmph",
}

let car1Method = car.description.bind(car1)
car1Method();
car1Method("hyundai", 500);


// Immediately invoked function expressions -> IIFE


let text = (function(a,b){
    console.log(a+b)
    return "I am IIFE"
})  (23,44)

console.log(text)
