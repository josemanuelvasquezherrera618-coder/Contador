/*Actividad práctica

/*Ejercicio 1
Crear un conjunto con nombres de estudiantes.

let estudiantes = new Set(["Jose", "laura", "isabella", "Alejandro", "Valentina"])

console.log(estudiantes)

/*Después:
agregar 3 nombres
mostrar cuántos hay
verificar si existe uno de ellos

estudiantes.add("Federico")
estudiantes.add("Sofia")
estudiantes.add("Camila")

console.log(estudiantes)
console.log(estudiantes.size)

console.log(estudiantes.has("Federico")) 




/*Ejercicio 2
Dado el siguiente array:*/

/*let listaNumeros = [5,5,6,7,7,8,9];
Convertir el array en un Set para eliminar duplicados.

let listaNumeros = [5,5,6,7,7,8,9];

console.log(listaNumeros)

let sinDuplicados = new Set(listaNumeros);
console.log(sinDuplicados);

/*Ejercicio 3

Crear un programa que:
Cree un Set de ciudades
Agregue 4 ciudades
Recorra el Set con un for...of
Imprima cada ciudad*/

/*

let conjuntoCiudades = new Set();
conjuntoCiudades.add("Valledupar")
conjuntoCiudades.add("Londres")
conjuntoCiudades.add("Bucaramanga")
conjuntoCiudades.add("Denver")

for(let ciudad of conjuntoCiudades){
    console.log(ciudad)
}


/*Reto

Crear un programa que:

1 Reciba un array de correos electrónicos
2 Elimine los correos duplicados usando Set
3 Muestre cuántos correos únicos hay


let listaCorreos = ["pepe123@gmail.com", "fredericjhonson@gmail.com", "señoramorris4@gmail.com","señoramorris4@gmail.com"]
console.log(listaCorreos)

let correosUnicos = new Set(listaCorreos)
console.log(correosUnicos)

console.log(`Correos únicos: ${correosUnicos.size}`) /*




//PRACTICA DE MAP QUE LOS NUMEROS SON LOS CLAVES Y LOS MESES LOS VALORES

let meses = new Map();
meses.set(1, "Enero");
meses.set(2, "Febrero");
meses.set(3, "Marzo");
meses.set(4, "Abril");
meses.set(5, "Mayo");
meses.set(6, "Junio");
meses.set(7, "Julio");
meses.set(8, "Agosto");
meses.set(9, "Septiembre");
meses.set(10, "Octubre");
meses.set(11, "Noviembre");
meses.set(12, "Diciembre");

if(meses.has(5)){
    console.log(`El mes número 5 es: ${meses.get(5)}`)
}
meses.set("verano", ["Junio", "Julio", "Agosto"])

let array = [1, 2, 3, 4, 5];
let set = new Set(array);
let mapa = new Map();
mapa.set("numeros", set);

let paisCapital = new Map();
paisCapital.set("Colombia", "Bogotá");
paisCapital.set("Perú", "Lima");
paisCapital.set("Chile", "Santiago");
console.log(`La capital de Colombia es: ${paisCapital.get("Colombia")}`);
console.log(`La capital de Perú es: ${paisCapital.get("Perú")}`);
console.log(`La capital de Chile es: ${paisCapital.get("Chile")}`);

//PRACTICA NUMERO DOS CON MAP LLAMADO INVENTARIO 

let inventario = new Map();
inventario.set("teclado", 10);
inventario.set("mouse", 20);
inventario.set("monitor", 5);

for(let [producto, cantidad] of inventario){
    console.log(`Producto: ${producto}, Cantidad: ${cantidad}`)
}

*/
/* Crea un Map de estudiantes y sus edades.
Luego verifica si existe la clave "Maria". Si existe, muestra su edad. Si no, agrega "Maria" con una edad y muéstrala.
8. Crea un programa que:
1 Guarde en un Map el nombre de un estudiante y su nota
2 Recorra el Map
3
 Muestre solo los estudiantes con nota mayor a 4.0



let estudiantes = new Map();
estudiantes.set("Juan", 3.5);
estudiantes.set("Maria", 4.2);
estudiantes.set("Pedro", 2.8);

if(estudiantes.has("Maria")){
    console.log(`La nota de Maria es: ${estudiantes.get("Maria")}`)
}
else{
    estudiantes.set("Maria", 4.0);
    console.log(`Maria ha sido agregada con una nota de: ${estudiantes.get("Maria")}`)
}

let notas = new Map();
notas.set("Ana", 4.5);
notas.set("Luis", 3.8);
notas.set("Sofia", 4.0);

for(let [estudiante, nota] of notas){
    if(nota > 4.0){
        console.log(`Estudiante: ${estudiante}, Nota: ${nota}`)
    }

} 


//1. Crea un objeto con 3 propiedades

let persona = {
    nombre: "Jose",
    edad: 18,
    ciudad: "Rionegro"    
}

//2. Accede y muestra el valor

console.log(persona.nombre)
console.log(persona["edad"])
console.log(persona.ciudad)

//3. Agrega una nueva propiedad al objeto

persona.profesion = "Tecnico en mantenimiento de Aviones"
console.log(persona)

//4. Elimina una de las 3 primeras propiedades

delete persona.edad
console.log(persona)

//5. Agrega una función e invocala

persona.saludar = function(){
    console.log(`Hola, mi nombre es ${this.nombre} y soy ${this.profesion}`)
}

persona.saludar()

//6. Itera las propiedades del objeto

for(let clave in persona){
    console.log(`${clave}: ${persona[clave]}`)
}

//7. Crea un objeto anidado

let empresa = {
    
    nombre: "Avianca",
    ubicacion: "Rionegro",
    
    empleados: {
        inspector: "Carlos",
        Supervisor: "Ana",
        Avionico: "Luis"
    }
}

console.log(empresa)
console.log(empresa.empleados)

//8. Accede y muestra el valor de las propiedades anidadas

console.log(empresa.empleados.inspector)
console.log(empresa.empleados.Supervisor)
console.log(empresa.empleados.Avionico)

//9. Comprueba si los dos objetos creados son iguales

let persona2 = {
    nombre: "Jose",
    ciudad: "Rionegro",
    profesion: "Tecnico en mantenimiento de Aviones"
}

console.log(persona === persona2) //false porque son objetos diferentes en memoria

//10. Comprueba si dos propiedades diferentes son iguales

console.log(persona.nombre === persona2.nombre) //true porque tienen el mismo valor
console.log(persona.ciudad === persona2.ciudad) //true porque tienen el mismo valor
console.log(persona.profesion === persona2.profesion) //true porque tienen el mismo valor



// Ejercicio práctico
// Crea un objeto llamado "libro" con las siguientes propiedades:
// título, autor, año de publicación y género. 
// Luego, muestra cada una de las propiedades del libro en la consola.

let libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    añoPublicacion: 1967,
    genero: "Realismo mágico"
}

console.log(`Título: ${libro.titulo}`)
console.log(`Autor: ${libro.autor}`)
console.log(`Año de publicación: ${libro.añoPublicacion}`)
console.log(`Género: ${libro.genero}`)

// Reto
// Crea un objeto llamado "pelicula" con las siguientes propiedades: 
// título, director, año de estreno y género. 
// Luego, crea un método dentro del objeto que imprima una 
// descripción completa de la película utilizando sus propiedades.

let pelicula = {
    titulo: "Inception",
    director: "Christopher Nolan",
    añoEstreno: 2010,
    genero: "Ciencia ficción",
   
    descripcion: function(){
        console.log(`La película "${this.titulo}" es una obra maestra del director ${this.director}, estrenada en el año ${this.añoEstreno}. Pertenece al género de ${this.genero} y ha sido aclamada por su trama compleja y visuales impresionantes.`)
    }
}

pelicula.descripcion()

//Ejercicios clases

// 1. Crea una clase que reciba dos propiedades

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

// 2. Añade un método a la clase que utilice las propiedades

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función

let persona1 = new Persona("Jose", 18);
persona1.saludar()

// 4. Añade un método estático a la primera clase

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }

    static obtenerInformacion(){
        console.log("Esta es una clase para crear personas.")
    }
}

Persona.obtenerInformacion()

// 5. Haz uso del método estático

let persona3 = new Persona("Maria", 25);
persona3.saludar()
Persona.obtenerInformacion()

// 6. Crea una clase que haga uso de herencia

class Estudiante extends Persona {
    constructor(nombre, edad, carrera){
        super(nombre, edad);
        this.carrera = carrera;
    }
    estudiar(){
        console.log(`${this.nombre} está estudiando ${this.carrera}.`)
    }
}

let estudiante1 = new Estudiante("Ana", 20, "Ingeniería de Sistemas");
estudiante1.saludar()
estudiante1.estudiar()

// 7. Crea una clase que haga uso de getters y setters

class Producto {
    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(nuevoPrecio){
        this._precio = nuevoPrecio;
    }
}

let producto1 = new Producto("Laptop", 1500);
console.log(`Producto: ${producto1.nombre}, Precio: $${producto1.precio}`)

producto1.nombre = "Smartphone";
producto1.precio = 800;
console.log(`Producto: ${producto1.nombre}, Precio: $${producto1.precio}`)

// 8. modificar la clase con getters y setters pero con propiedades privadas}

class Producto {

    #nombre;
    #precio;

    constructor(nombre, precio) {
        this.#nombre = Papas;
        this.#precio = precio;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    get precio() {
        return this.#precio;
    }

    set precio(nuevoPrecio) {
        this.#precio = nuevoPrecio;
    }
}

// 9. Utiliza los get y set y muestra sus valores

class Producto {

    #nombre;
    #precio;

    constructor(nombre, precio) {
        this.#nombre = nombre; // corregido
        this.#precio = precio;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    get precio() {
        return this.#precio;
    }

    set precio(nuevoPrecio) {
        this.#precio = nuevoPrecio;
    }
}


let producto1 = new Producto("Papas", 2500);


console.log("Nombre:", producto1.nombre);
console.log("Precio:", producto1.precio);


producto1.nombre = "Gaseosa";
producto1.precio = 3000;


console.log("Nuevo nombre:", producto1.nombre);
console.log("Nuevo precio:", producto1.precio);

// 10. Sobrescribe un método de una clase que utilice herencia y haz uso de super para llamar al método original

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarInfo() {
        return `Producto: ${this.nombre}, Precio: $${this.precio}`;
    }
}

// Clase hija que hereda de Producto
class ProductoDescuento extends Producto {
    constructor(nombre, precio, descuento) {
        super(nombre, precio); // llama al constructor del padre
        this.descuento = descuento;
    }

    // Sobrescribimos el método
    mostrarInfo() {
        // Llamamos al método original con super
        let infoOriginal = super.mostrarInfo();
        let precioFinal = this.precio - (this.precio * this.descuento / 100);

        return `${infoOriginal}, Descuento: ${this.descuento}%, Precio final: $${precioFinal}`;
    }
}

// Crear objeto
let producto1 = new ProductoDescuento("Laptop", 2000, 10);

// Mostrar resultado
console.log(producto1.mostrarInfo());

//Retos
// 1. Crea una clase llamada "Libro" con las siguientes propiedades: título, autor, año de publicación y género. 
    // Luego, crea un método dentro de la clase que imprima una descripción completa del libro utilizando sus propiedades.

class Libro {
    // Declaramos las propiedades privadas
    #titulo;
    #autor;
    #anioPublicacion;
    #genero;

    constructor(titulo, autor, anioPublicacion, genero) {
        this.#titulo = titulo;
        this.#autor = autor;
        this.#anioPublicacion = anioPublicacion;
        this.#genero = genero;
    }

    // Getters
    get titulo() { return this.#titulo; }
    get autor() { return this.#autor; }
    get anioPublicacion() { return this.#anioPublicacion; }
    get genero() { return this.#genero; }

    // Setters (opcionales, por si necesitas cambiar datos luego)
    set titulo(nuevoTitulo) { this.#titulo = nuevoTitulo; }
    set autor(nuevoAutor) { this.#autor = nuevoAutor; }

    // MÉTODO: Imprimir descripción completa
    describirLibro() {
        console.log(`--- Información del Libro ---`);
        console.log(`Título: "${this.#titulo}"`);
        console.log(`Autor: ${this.#autor}`);
        console.log(`Año: ${this.#anioPublicacion}`);
        console.log(`Género: ${this.#genero}`);
        console.log(`-----------------------------`);
    }
}

// --- PRUEBA DEL RETO ---

const miLibro = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, "Realismo mágico");


miLibro.describirLibro();

console.log(`Leyendo: ${miLibro.titulo}`);

// 2. Crea una clase llamada "Película" con las siguientes propiedades: título, director, año de estreno y género. 
    // Luego, crea un método dentro de la clase que imprima una descripción completa de la película utilizando sus propiedades.

class Pelicula {
    // Definimos las propiedades privadas con #
    #titulo;
    #director;
    #estreno;
    #genero;

    constructor(titulo, director, estreno, genero) {
        this.#titulo = "SpiderMan 3";
        this.#director = "Sam Raimi";
        this.#estreno = "en 2027";
        this.#genero = "Acción - Fantasia";
    }

    // Getters
    get titulo() { return this.#titulo; }
    get director() { return this.#director; }
    get estreno() { return this.#estreno; }
    get genero() { return this.#genero; }

    // Setter con validación simple
    set estreno(nuevoAnio) {
        const anioActual = new Date().getFullYear();
        if (nuevoAnio > anioActual + 5) { 
            console.error("Error: El año de estreno parece incorrecto.");
        } else {
            this.#estreno = nuevoAnio;
        }
    }

    // MÉTODO: Descripción completa
    imprimirResumen() {
        console.log(`🎬 PELÍCULA: ${this.#titulo}`);
        console.log(`🎥 DIRIGIDA POR: ${this.#director}`);
        console.log(`📅 AÑO: ${this.#estreno} | 🎭 GÉNERO: ${this.#genero}`);
        console.log("-----------------------------------------");
    }
}

// --- PRUEBA DEL RETO 2 ---

const miPelicula = new Pelicula("Inception", "Christopher Nolan", 2010, "Ciencia Ficción");

// Mostramos la descripción usando el método
miPelicula.imprimirResumen();

// Intentamos cambiar el año usando el setter
miPelicula.estreno = 2024; 
console.log(`Año actualizado a: ${miPelicula.estreno}`);



let myArray = [1, 2, 3, 4, 5,]
let [num1, num2, num3, num4, num5] = myArray

console.log(num2)

let fullstack = [
    ["HTML", "CSS", "JavaScript"],
    ['JAVA', 'SPRINGBOOT', 'POSTGRESQL'],
]

console.log (fullstack)

let [frontend, backend] = fullstack
let [lenguaje1, lenguaje2, lenguaje3] = frontend
console.log(lenguaje3)

console.log(frontend)
console.log(backend)

let myArray2 = [1, 2, 3]

let [,num7, num8] = myArray2
console.log(num7) //2
console.log(num8) //3


//Objetos

let persona = {
    name: "Jose",
    age: 18,
    city: "Rionegro"    
}

let {name, age, city} = persona

console.log(name)
console.log(age)
console.log(city)

let {name: nom, age: edad, city: ciudad, email = "josemanuelvasquezherrera618@gmail.com"} = persona

console.log(nom)
console.log(edad)
console.log(ciudad)
console.log(email)

let person2 = {
    nombre2: 'Jose',
    altura: 1.68,
    edad: 18,
    trabajo: {
        empresa: 'Google',
        cargo: 'Desarrolador'
    }
}

let {nombre2, trabajo: {empresa, cargo}} = person2

console.log(nombre2)
console.log(empresa)
console.log(cargo)

//DESESTRUCTURACIÓN DURANTE LA ITERACIÓN

const countries = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Normay", "Oslo"],
];

for (let [country1, city1] of countries) {
    console.log(`La capital de ${country1} es ${city1}`);
}

function saludar({nombre, edad}) {
    console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);

saludar({nombre: "Jose", edad: 18})
}

let myArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let [num6, num11, num17, num9, num10, ...resto] = myArray4

console.log(num6, num11, num17)
console.log(resto)

let myArray5 = [11, 12, 13]

let numeros = [...myArray4, ...myArray5]

console.log(numeros)

let persona3 = {
    nombre: "Jose",
    edad: 18,
    ciudad: "Rionegro"    
}

let persona4 = {...persona3, profesion: "Tecnico en mantenimiento de Aviones"}
console.log(persona4)

//Spred en funciones flecha

let sumar = (...numeros) => {
    let resultado = 0;
    for(let numero of numeros){
        resultado += numero;
    }
    return resultado;
}

console.log(sumar(1,2,8,10,100,50))

*/

//Ejercicios practicos

// 1. Usa desestructuración para extraer los dos primeros elementos de un array

let numeros = [10, 20, 30, 40, 50];
let [num1, num2] = numeros;
console.log(num1);
console.log(num2);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [num3, num4 = 40] = [10, 20];
console.log(num3);
console.log(num4);

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let persona = {
    nombre: "Jose",
    edad: 18,
    ciudad: "Rionegro"    
}

let {nombre, edad} = persona;
console.log(nombre);
console.log(edad);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes

let {nombre: nom, edad: edadPersona} = persona;
console.log(nom);
console.log(edadPersona);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let persona2 = {
    nombre: "Jose",
    edad: 18,
    trabajo: {
        empresa: 'Avianca',
        cargo: 'Tecnico en mantenimiento de Aviones'
    }
}

let {trabajo: {empresa, cargo}} = persona2;
console.log(empresa);
console.log(cargo);

// 6. Usa propagación para combinar dos arrays en uno nuevo

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let arrayCombinado = [...array1, ...array2];
console.log(arrayCombinado);

// 7. Usa propagación para crear una copia de un array

let arrayOriginal = [1, 2, 3];
let arrayCopia = [...arrayOriginal];
console.log(arrayCopia);

// 8. Usa propagación para combinar dos objetos en uno nuevo

let objeto1 = {a: 1, b: 2};
let objeto2 = {c: 3, d: 4};
let objetoCombinado = {...objeto1, ...objeto2};
console.log(objetoCombinado);

// 9. Usa propagación para crear una copia de un objeto

let objetoOriginal = {a: 1, b: 2};
let objetoCopia = {...objetoOriginal};
console.log(objetoCopia);

// 10. Combina desestructuración y propagación para extraer una propiedad de un objeto y crear un nuevo objeto sin esa propiedad

let persona3 = {
    nombre: "Jose",
    edad: 18,
    ciudad: "Rionegro"    
}

let {ciudad, ...personaSinCiudad} = persona3;
console.log(personaSinCiudad);

// 11. Combina desestructuración y propagación para extraer un elemento de un array y crear un nuevo array sin ese elemento

let numeros2 = [10, 20, 30, 40, 50];
let [numExtraido, ...numerosRestantes] = numeros2;
console.log(numerosRestantes);
