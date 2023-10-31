              // 0       1       2       3       4           5
// const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
            //remover posição indice 1 & remover qtde de indices que quer   
// nomes.splice(1, 2, "Rodrigo");
//ou nomes.splice(1,2)
//  nomes.push("rodrigo")
// console.log(nomes);


const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
// const nomes = ["João"  , "Lara", "Marjorie", "Leo"];
//O primeiro parâmetro do método splice() é o índice do elemento que queremos remover. Portanto, para remover o nome de Ana, passamos o índice 1:
nomes.splice(1)
console.log(nomes)
nomes.splice(1, 2)
console.log(nomes)

//O segundo parâmetro é a quantidade de itens que queremos remover a partir desse índice. Logo, para remover o nome de Ana e de Caio, informaremos o valor 2:
 
animaisDoAquario =   ['🐋', '🐙', '🐬', '🦈']
// animaisDoAquario =['🐋', '🐙', '🐬', '🦈']
console.log(animaisDoAquario)

animaisDoAquario.splice(1)
console.log(animaisDoAquario)
// animaisDoAquario.splice(3,2,'🐟')
// console.log(animaisDoAquario)