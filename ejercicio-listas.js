
let listaCompra = ["Leche", "Huevos", "Pan", "Queso", "Frutas"];

listaCompra.push("Aceite de Girasol");
listaCompra.pop();


const peliculasFavoritas = [
  {
    titulo: "Inception",
    director: "Christopher Nolan",
    fecha: "2010",
  },
  {
    titulo: "The Shawshank Redemption",
    director: "Frank Darabont",
    fecha: "1994",
  },
  {
    titulo: "The Dark Knight",
    director: "Christopher Nolan",
    fecha: "2008",
  },
];


const peliculasPosteriores2010 = peliculasFavoritas.filter((pelicula) => pelicula.fecha > "2010-01-01");


const directores = peliculasFavoritas.map((pelicula) => pelicula.director);


const titulos = peliculasFavoritas.map((pelicula) => pelicula.titulo);


const directoresTitulosConcat = directores.concat(titulos);


const directoresTitulosSpread = [...directores, ...titulos];