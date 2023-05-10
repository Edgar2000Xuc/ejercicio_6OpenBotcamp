// Variable con la lista de la compra
let listaCompra = ["Leche", "Huevos", "Pan", "Manzanas", "Queso"];

// Añadir "Aceite de Girasol" a la lista de la compra
listaCompra.push("Aceite de Girasol");

// Eliminar "Aceite de Girasol" de la lista de la compra
listaCompra.splice(listaCompra.indexOf("Aceite de Girasol"), 1);

// Lista de tus 3 películas favoritas
let peliculasFavoritas = [
  { titulo: "El Señor de los Anillos: La Comunidad del Anillo", director: "Peter Jackson", fecha: "2001" },
  { titulo: "Origen", director: "Christopher Nolan", fecha: "2010" },
  { titulo: "La La Land", director: "Damien Chazelle", fecha: "2016" }
];

// Lista de películas posteriores al 1 de enero de 2010
let peliculasPosteriores2010 = peliculasFavoritas.filter(pelicula => pelicula.fecha > "2010");

// Lista de directores de la lista de películas original
let directores = peliculasFavoritas.map(pelicula => pelicula.director);

// Lista de títulos de la lista de películas original
let titulos = peliculasFavoritas.map(pelicula => pelicula.titulo);

// Lista concatenada de directores y títulos (utilizando concat)
let directoresTitulosConcat = directores.concat(titulos);

// Lista concatenada de directores y títulos (utilizando el factor de propagación)
let directoresTitulosSpread = [...directores, ...titulos];
