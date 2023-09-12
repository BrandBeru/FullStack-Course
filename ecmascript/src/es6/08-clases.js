//Declarando

class User{
    constructor(name){
        this.name = name;
    }
    //metodos
    greeting(){
        return `Hello ${this.name} :D`
    }

    get uName(){
        return this.name;
    }
    set uName(n){
        this.name = n;
    }
}

const gndx = new User("GNDX")
console.log(gndx.greeting())
gndx.uName = "Developer"
console.log(gndx.greeting())