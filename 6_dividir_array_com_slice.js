const alunos = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];

//posição, onde vai terminar

const sala1 = alunos.slice(0, 10);
const sala2 = alunos.slice(10);

// console.log(alunos.slice())
console.log(sala1);
console.log(sala2);

const sala3 = alunos.slice(0, alunos.length / 2);
const sala4 = alunos.slice(alunos.length / 2);
console.log(sala3);
console.log(sala4);