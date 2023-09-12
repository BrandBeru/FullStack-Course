const fnasync = () => {
    return new Promise((resolve,reject) => {
        (true)
            ? setTimeout(() => resolve("Async!!!"),2000)
            : reject(new Error("Error"))
    })
}
const anotherFunction = async () => {
    const something = await fnasync();
    console.log(something)
}

console.log("Hello world :D")
anotherFunction()
console.log("GoodBye World")