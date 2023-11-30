


async function getData() {
    let data = await fetch("https://dummy.restapiexample.com/api/v1/employees")
    
    div1.innerText = data.status
}

getData()