const user = {username: "beru", age:18, country: "CO"}
const{username, ...values} = user
console.log(username)
console.log(values)