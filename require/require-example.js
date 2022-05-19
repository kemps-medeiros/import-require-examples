//importando varias funcopes de um arquivo
const functions = require("./module-export-example")

console.log(functions.getSurname("kemps", "medeiros"))

//outro jeito de importar mais de uma  função:
// const {getFullName, getSurname} = require("./module-export-example")
//
// console.log(getFullName("monster, "lesson"))
// console.log(getSurname("monster, "lesson"))




//Importando apenas uma função::
// const getFullName = require('./module-export-example')
//relative path for full file
// console.log(getFullName("monster", "lessons"));