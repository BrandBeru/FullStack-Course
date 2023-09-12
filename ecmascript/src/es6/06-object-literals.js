//enahced object literals

function  newUser(user,age,country){
    return{
        user,
        age,
        country,
        id: 4
    }
}

console.log(newUser("beru", 18, "CO"))