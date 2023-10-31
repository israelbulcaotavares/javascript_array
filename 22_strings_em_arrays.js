const nome = "Alura";
// ["A", "l", "u", "r", "a"]
let nomeMaiusculas = "";

for(let i= 0; i < nome.length; i++) {
    nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas)

//outro exemplo
console.log("")
console.log("")

const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"

const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  //Fundamentos de JS Alura