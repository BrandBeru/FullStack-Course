var persona = {
    nombre: "Juan",
    edad: 18,
    altura: 1.75,
    peso: 66,
    saludo: function(){
        console.log(this.nombre+" Hello world!");
    }
}

persona.saludo();

function person(nombre, edad,altura, peso){
    this.nombre = nombre;
    this.edad = edad;
    this.altura = altura;
    this.peso = peso;
}

var person1 = new person("Juan", 21, 1.69, 75);
console.log(person1.altura);