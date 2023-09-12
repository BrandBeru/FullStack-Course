function newUser(name, age, country){
    var name = name || 'Giovanny'
    var age = age || 17
    var country = country || "CO"
    console.log(name, age, country);
}
newUser()
newUser("Juan", 21, "MX")

function newAdmin(name = 'Oscar', age = 32, country = "CL"){
    console.log(name, age, country)
}
newAdmin()
newAdmin("Bernal", 43, "PE")