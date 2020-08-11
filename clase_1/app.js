//CLASE DE INTRODUCCION & REPASO 

document.write("Hola mundo")
var var1 = "Hola mundo"
console.log(var1)
//objeto js
var obj = {
    clave: "valor",
    clave1: 123,
    clave2: {
        otraclave: "valor"
    }
}
//la clave siempre sera un String
// JSON <- JavaScript Object Notation

/** 
 * OPERADORES LOGICOS
 * AND &&
 * v && v= v
 * f , f, f
 * 
 * OR ||
 * f || f = f
 * v, ,v, v
 * 
 * XOR ^ (o exclusivo)
 * v ^ v = f
 * v ^ v = v
 * v ^ v = v
 * v ^ v = f
 * 
 * NOT
 * !v = f
 * !f = v
 */
var condicion1 = true
var condicion2 = true
var condicion3 = false

if (condicion1 && condicion2) { //and
    console.log(" es verdadero")
} else {
    console.log("es falso")
}

if (condicion1 || condicion2) { //or
    console.log(" es verdadero")
} else {
    console.log("es falso")
}

if (condicion1 ^ condicion2) { //xor
    console.log(" es falso")
} else {
    console.log("es verdadero")
}

console.log(!condicion3)
/** 
 * == COMPARA VALOR, NO IMPORTA EL TIPO DE DATOS
 * ==== COMPARA VALOR Y TIPO DE DATO
 */
console.clear()
numero1 = 12
numero = "12"

if (numero1 == numero2) {
    console.log("son iguales")
} else {
    console.log("son diferentes")
}

/**
 * operador ternario (if - else resumido)
 * var x = condicion ? "cuerpo true" : "cuerpo false"
 */
console.clear()
var condicionTernaria = (numero1 > 12) ? "Es mayor a doce" : "Es menor a doce"
console.log(condicionTernaria)

/* errores php (en tiempo de ejecucion)
notice
warning 
fatal error - corta la ejecucion bloqueantes
*/
console.clear()
var valorNulo = null
console.log(valorNulo) //imprime null
console.log(typeof valorNulo) //object - js considera al null como un objeto
console.log(valorInexsitente) //el valor no existe
console.log(typeof valorInexsitente) //undefined rompe la ejecucion

//control de var undefined
if (typeof valorInexsitente !== 'undefined') {
    console.log(valorInexsitente)
} else {
    let valorInexsitente = "Soy un valor por default"
    console.log(valorInexsitente)
}


/**
 * 
 */
console.clear()

cadena1 = 15
cadena2 = "20"
cadena3 = 25.7
cadena4 = "soy un string"

console.log(cadena1 + cadena2) //suma a String <- 1520
console.log(cadena1 - cadena2) //resta xq Parsea a int
//parsear a la fuerza - segun ecma6 / ecma5 ES parseInt
console.log(cadena1 + Number(cadena2)) //suma y parsea a cadena2
console.log(Number(cadena3)) //NaN <- not a number

var arr1 = [12, "hola", 64.51, true]
//arr1[2] <- se accede mediante indice
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}
//forEach ...  
//forEach (requiere PARAMETRO que sera una FUNCION)-funciones anonimas(sin nombre)
//por cada elemento del array pasa una funcion que recibe como parametro el elemento en si 
arr1.forEach(function (dato) {
    console.log(dato)
})
//FOREACH CON ARROW FUNCTION 
arr1.forEach(dato => console.log(dato)) //solo si es de una dimension


// console.log(cadena1+ cadena3) - suma
// console.log(cadena1 - cadena3) -resta
// console.log(cadena1 / cadena3) -division
// console.log(cadena1 * cadena3) -mult



/**
 * templateString <- ecma6
 */
var saludo1 = "Hola!"
var saludo2 = ", como estas?"
console.log(saludo1 + " " + saludo2)
console.log(`${saludo1} ${saludo2}`)
console.clear()
/**
 * funciones 
 * al ser no tipado no es especifica el retorno de la funcion
 * EL RETURN ES LA ULTIMA LINEA DE LA FUNCION
 */
function saludar(nombre) {
    console.log(getSaludar(nombre))
}

function getSaludar(nombre) {
    return `Hola ${nombre}`
}

//arrowfunction <- funcion declarada de otra manera (LAMBDA expression)
//reemplaza el function con "=>"
var otroSaludo = () => {
    console.log("Saludo desde la arrow function")
}


