
//para exportar mais de uma fun��o, usar a palavra export antes da funcao

export const getLastname = (name, lastName) => {
    return lastName;
}

export const getFullName = (name, lastName) => {
    return name + " " + lastName;
}



//para exportar apenas uma fun��o
//const getFullName = (name, lastName) => {
//    return name + " " + lastName;
//}
//export default getFullName;