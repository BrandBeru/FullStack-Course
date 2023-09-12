var persona = {
    nombre: "Juan",
    edad: 18,
    altura: 1.75,
    peso: 66,
    saludo: function(){
        console.log(this.nombre+" Hello world!");
    }
}

console.log(persona.tamaño);

persona.saludo();

function person(nombre, edad,altura, peso){
    this.nombre = nombre;
    this.edad = edad;
    this.altura = altura;
    this.peso = peso;
}
var people = [];
//Automatico
for(var i = 0; i<3; i++){
    var nameH = prompt("Nombre: ");
    var age = prompt("Edad: ");
    var height = prompt("Altura: ");
    var weigh = prompt("Peso: ");
    var human = new person(nameH,age, height,weigh);
    people.push(human);
    console.log(people);
}