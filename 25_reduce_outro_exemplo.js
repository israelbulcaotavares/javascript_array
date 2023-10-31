//método reduce() para “reduzir” uma lista de números para um único valor.

const numeros = [43, 50, 65, 12];

const soma = numeros.reduce((acc, atual) => atual + acc, 0);

console.log(soma); //170

/* 

const soma = numeros.reduce(function (acc, atual) {
 return atual + acc
}, 0)

*/

function operacaoNumerica(acc, atual) {
  return atual + acc;
}

const soma2 = numeros.reduce(operacaoNumerica, 0);
console.log(soma2);
