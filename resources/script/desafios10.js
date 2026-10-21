// let notas = [8, 7, 9, 4, 6, 10];

// let verificar = notas.every(nota => nota > 0 && nota <=10)

// // every (verifica se todos os valores passados atendem uma condição)

// if (verificar) {
//     console.log("notas validas")
// }
// else {
//     console.log("Notas invalidas")
// }
// 
// function digaOla() {
//   return "Olá mundo!";
// }
// let mensagem = digaOla();
// console.log(mensagem);
 
// function multiply(a, b) {
//   return a * b;
// }
// let n1 = Number(prompt("Digite o primeiro número"))
// let n2 = Number(prompt("Digite o segundo número:"))

// let resultado = multiply(n1,n2)
// console.log (resultado)

function verificarPar(a) {

  if (a % 2 === 0) {
    console.log ("par");
}
else {
    console.log ("impar");
  }
}
 let perguntar = Number(prompt("Qual é o seu número?: "))

 verificarPar(perguntar)



