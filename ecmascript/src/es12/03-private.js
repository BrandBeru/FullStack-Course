class user {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    #speak(){ // Private method
        return "Hello"
    }
    get #uName(){ // Private getter
        return this.name
    }
    set #uName(name){ // Private setter
        this.name = name;
    }
}
const class1 = new user("Karen", 17)