const getFullName = (name, surname) => {
    return name + " " + surname;
};

const getSurname = (name, surname) => {
    return surname;
}

//outro jeito de exportar que nao precisa do module.exports:
// exports.getFullName = (name, surname) => {
//     return name + " " + surname;
// };

// exports.getSurname = (name, surname) => {
//     return surname;
// }

//exportando mais de uma fun��o
module.exports = {  
    getFullName,
    getSurname
}

//exportando apenas uma fun��o:
// module.exports = getFullName;