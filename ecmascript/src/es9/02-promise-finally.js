const anotherfunction = () => {
    return new Promise((resolve, reject) => {
        if(!true){
            resolve('Hey!!')
        }else{
            reject('Naaa...')
        }
    })
}
anotherfunction().then(response => console.log(response))
.catch(err => console.log(err))
.finally(() => console.log("Finally"))