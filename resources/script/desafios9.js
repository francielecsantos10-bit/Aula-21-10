let notas = [8,
     7, 
     9,
     4, 
    6, 
    10
];

let verificar = notas.some(nota => nota <5);

if(verificar){
    console.log("Pelo o menos um aluno possui nota abaixo de 5");
}
else{
    console.log("Nenhum aluno possui nota abaixo de 4");
}