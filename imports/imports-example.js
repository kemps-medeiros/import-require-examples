//para funcionar, acrescentar a seguinte linha no package.json
// "type": "module",

//importando mais de uma fun��o
import { getFullName, getLastname } from './exports-example.js'


console.log(getLastname("MY", "LastNamee"));




//importando apenas uma fun��o
//import getFullName from "./exports-example.js";

//console.log(getFullName("kemps", "teste"))