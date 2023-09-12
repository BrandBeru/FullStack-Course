const promise = new Promise((resolve, reject) => {
    resolve('Hey!')
})

const cows = 15
const countCows = new Promise((resolve, reject) => {
    if(cows > 10){
        resolve('We have enough cows on the farm')
    }else{
        reject('The is not the enough cows in the farm, total: ' + cows)
    }
})

countCows.then(result => console.log(result))
.catch(error => console.error(error))
.finally(() => console.log("Finally!"))