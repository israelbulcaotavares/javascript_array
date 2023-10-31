const nomes = ["Evaldo", "Mari", "Camis"]

nomes.forEach(function (nome){ /// opcao 1
    console.log(nome)
})
console.log("")
 
nomes.forEach((nome) => {  /// opcao 2
    console.log(nome)
})

console.log("")
function imprimeNome(nome) {  /// opcao 3
    console.log(nome)
}

nomes.forEach( imprimeNome )