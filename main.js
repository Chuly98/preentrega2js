class Libros {
    constructor(autor, titulo, editorial, cantidad, precio) {
        this.autor = autor
        this.titulo = titulo
        this.editorial = editorial
        this.cantidad = this.cantidad
        this.precio = precio
    }
}

//Cargar ProductosLibros
const cargarLibros = []
let continuar = true
while (continuar) {
    const autor = prompt("Ingrese el autor del libro").toUpperCase()
    const titulo = prompt("Ingrese el Titulo del Libro").toUpperCase()
    const editorial = prompt("Ingrese tu editorial").toUpperCase()
    const cantidad = parseInt(prompt("Ingrese el stock"))
    const precio = parseFloat(prompt("Ingrese el Precio del producto"))
    cargarLibros.push(new Libros(autor, titulo, editorial, cantidad, precio))
    continuar = confirm("¿Quiere cargar otro libro mas?")
}
//Eliminar ProductosLibros
continuar = confirm("Quiere eliminar algun producto")
while (continuar) {
    const eliminarLibros = prompt("Ingrese el titulo del libro.").toUpperCase()
    const index = cargarLibros.findIndex((libros) => libros.titulo === eliminarLibros)
    if (index != -1) {
        cargarLibros.slice(index, 1)
        alert("Libro eliminado")
    } else {
        alert("Libro no encontrado")
    }
    continuar = confirm("Quiere seguir eliminando producto")
}
//Actualizar ProductoLibro
continuar = confirm("Quiere actualizar algun producto de la libreria")
while (continuar) {
    const actualizarLibros = prompt("Que producto de la libreria quiere actualizar").toUpperCase()
    const index = cargarLibros.findIndex((libros) => libros.titulo === actualizarLibros)
    if (index != -1) {
        const autor = prompt("Ingrese el autor del libro").toUpperCase()
        const titulo = prompt("Ingrese el Titulo del Libro").toUpperCase()
        const editorial = prompt("Ingrese tu editorial").toUpperCase()
        const cantidad = parseInt(prompt("Ingrese el stock"))
        const precio = parseFloat(prompt("Ingrese el Precio del producto"))
        cargarLibros[index] = new Libros(autor, titulo, editorial, cantidad, precio)
        alert("Libro actualizado con exito")
    } else {
        alert("Libro no encontrado en la base de datos")
    }
    continuar = confirm("Quiere seguir actualizando la libreria")
}
console.log(cargarLibros)