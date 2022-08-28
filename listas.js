const compra = ["Aceite", "Sal", "Pan", "Leche", "Café"];
console.log(compra.push("Aceite de girasol"));
compra.forEach((elemento) => {console.log(elemento)});

console.log(compra.pop());
compra.forEach((elemento) => {console.log(elemento)});

const peliculas = [
    {titulo: "Tiburón", director: "Steven Spielberg", fecha: 1975},
    {titulo: "Star Wars", director: "George Lucas", fecha: 1977},
    {titulo: "El canto del lobo", director: "Abel Lanzac", fecha: 2019}
];

const peliculas2010 = peliculas.filter(anyo => anyo.fecha > 2010);
console.log(peliculas2010)

const peliculasDirectores = peliculas.map(eldirector => eldirector.director);
console.log(peliculasDirectores)

const peliculasTitulos = peliculas.map(eltitulo => eltitulo.titulo);
console.log(peliculasTitulos)

const pelisDires = peliculasDirectores.concat(peliculasTitulos);
console.log(pelisDires)

const pelisDires2 = [...peliculasDirectores, ...peliculasTitulos];
console.log(pelisDires2)