var articulos = [
    {
        nombre: "Carro",
        costo: 30000
    },
    {
        nombre: "Television",
        costo: 1500
    },
    {
        nombre: "Libro",
        costo: 320
    },
    {
        nombre: "Laptop",
        costo: 5000
    },
    {
        nombre: "Teclado",
        costo: 200
    },
    {
        nombre: "Celular",
        costo: 1000
    }
];

var filterActicles = articulos.filter(function(articulo){
    return articulo.costo <= 1000
});

console.log(filterActicles);

var mapArticles = articulos.map(function(articulo){
    return articulo.nombre
})
console.log(mapArticles)

var findArticle = articulos.find(function(articulo){
    return articulo.nombre === "Teclado"
})
console.log(findArticle)

articulos.forEach(function(articulo){
    console.log(articulo.nombre)
})

var cheapArticles = articulos.some(function(articulo){
    return articulo.costo <= 500;
})
console.log(cheapArticles)