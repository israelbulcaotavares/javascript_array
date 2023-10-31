const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

// array funcionarios é um array de duas dimensões. Há 3 arrays dentro dele, e para acessar os valores em funcionarios precisamos 
// de 2 colchetes “[ ] [ ]”. 
// O primeiro colchete será usado para escolher qual dos 3 arrays dentro de funcionarios será acessado. podendo ser:
const funcionarios = [nomes[0], idades[1], faculdade[1]]; 
console.log(funcionarios)