// map(), filter(),reduce(), forEach()

// map()

let arr = [55,33,22,11];
arr.map(function(item){console.log(item*item)})

// filter()-> this only returns the elements from an arrya which obey the true condition
arr = arr.filter(function(item){
    return item%2==0;
})
console.log(arr)