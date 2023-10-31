//EXEMPLO 1
const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}

console.log("")

//EXEMPLO 2
const numeros2 = [100, 200, 300, 400, 500, 600];
for (let i = numeros2.length - 1; i >= 0; i -= 2) {
  console.log(numeros2[i]);
}

console.log("")
//EXEMPLO 3
const numeros3 = [100, 200, 300, 400, 500, 600];

for (let i = numeros3.length - 1; numeros3[i] >= 300; i -= 2) {
  console.log(numeros3[i]);
}


//NUMEROS PARES
const numerosPares = [];

for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);