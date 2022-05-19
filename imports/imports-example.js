//para funcionar, acrescentar a seguinte linha no package.json
// "type": "module",

//importando mais de uma função
import { getFullName, getLastname } from './exports-example.js'


console.log(getLastname("MY", "LastNamee"));




//importando apenas uma função
//import getFullName from "./exports-example.js";

//console.log(getFullName("kemps", "teste"))