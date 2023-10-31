
//Operador de espalhamento permite a você "espalhar" elementos de uma estrutura de dados iterável 
// (como um array ou objeto) em outro lugar, como em um novo array ou objeto. 

function soma(a, b, c) {
    return a + b + c;
  }
  
  const valores = [1, 2, 3];
  const resultado = soma(...valores); // resultado será 6
//   const resultado = soma(...valores); // resultado com efeitos colaterais sem o operador de espalhamento [...]

 console.log(valores) 
 console.log(resultado) 

