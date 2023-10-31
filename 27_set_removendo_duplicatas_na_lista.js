const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
console.log(nomes)

console.log("")

// const setNomes = new Set (nomes) 
// const nomesAtualizados = [...setNomes] // com oeprador de espalhamento
const nomesAtualizados = [...new Set (nomes)] // com oeprador de espalhamento 
console.log(nomesAtualizados) 
console.log("")

const numeros = new Set([1,1,2,3,4,4])   
console.log(numeros)

console.log("")