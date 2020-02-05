
// function suma(añoNacimiento, edad) {
//     var resultado = añoNacimiento + edad 
//     return resultado} 

// console.log (suma(1996, 24))


// var edad = 15
// var edadPermitida = 18

// function compararEdad (edad, edadPermitida){
//     if  (edad >= edadPermitida) {

// return "mayor de edad" } 

// else {return "menor de edad"} 
// }
// console.log(compararEdad(edad,edadPermitida))

// function evaluate(x) {
//     if (x > 0) { return "Postivo" }
//     else if (x < 0) { return "Negativo" }
//     else { return "Cero" }
// }
// console.log(evaluate(-2))

// function letter(letra) {
//     if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") { return "Vocal" }
//     else if (letra >= 0 || letra <= 0 || letra == "." ) {return "Debes poner una letra"}
//     else { return "Consonante"}
// }
// console.log(letter(2))


// function multiple(x) {
//     if (x % 5 === 0 || x % 11 === 0) { return true }
//     else {return false}
// }

// console.log (multiple (16))

var myPenguin = {
    character: "Masha",
    origin: ["Death and the Penguin", "Penguin Lost"],
    autor: "Andrey Kurkov"
}

console.log("Hola mi nombre es", myPenguin.character, ". Mi autor,", myPenguin.autor, ", me dió vida en", myPenguin.origin[0], "y en", myPenguin.origin[1])

myPenguin.puedeVolar = false
myPenguin.graznar = function () { return "kaww kaww" }


myPenguin.saludar = function() { 
    return "Hola mi nombre es " + this.character + ". Mi autor," + this.autor + ", me dió vida en" + this.origin[0] + "y en" + this.origin
}

console.log (saludar())

myPenguin.character = "Señor Pingu"

console.log(myPenguin.character)


myPenguin.volar = function() {
    if (this.puedeVolar == true) {return "¡Puedo Volar!"}
    else {return "¡No puedo volar!"}
}

console.log(myPenguin.volar())