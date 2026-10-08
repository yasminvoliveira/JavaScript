//#region atividades 
// #region Atv.1
// Atividade 1 — Maioridade - Crei uma variável idade e atribua um 
// valor. Em seguida, use uma estrutura condicional para verificar 
// se a idade é maior ou igual a 18. Se for, exiba "Maior de idade",
// caso contrário, exiba "Menor de idade".

const idade = 25;
if (idade >= 18) {
    console.log("Maior de idade");
}

//#endregion
//#region Atv.2
//Atividade 2 — Aprovação - Implemente com if/else e com switch case. 
// Crie uma variável nota e atribua um valor.
const nota = 8;

if (nota > 7){
    console.log("Aprovado");}

if (nota >=5 && nota < 7){
    console.log("Recuperação");}

if (nota <5){
    console.log("Reprovado");}

else if (nota >10){
    console.log("Não foi possível encontrar a nota")

}

switch (true) {

  case (nota < 5):
    console.log("Reprovado");
    break;

  case (nota >= 5 && nota < 7):
    console.log("Recuperação");
    break;

  case (nota >= 7):
    console.log("Aprovado");
    break;

  default:
    console.log("Não foi possível encontrar a nota");
}

//#endregion

//#region Atv.3
//Atividade 3 — Login - Crie uma variável usuario e outra senha. 
//Em seguida, use uma estrutura condicional para verificar se o 
//usuário e a senha são válidos e pode ou não acessar o sistema.
const senha = 1234;
const usuario = "yasmin1401"


if (senha === 12345 && usuario === "yasmin1401"){
    console.log("Usuário autorizado");
}

else{
    console.log("Acesso Negado");
}
//#endregion
//#region Atv.4
//Atividade 4 — Status do pedido - Crie uma variável statusPedido e
// atribua um valor (pendente, pago, enviado, processando, entregue,
// concluído).
const statusPedido = 1
switch(statusPedido){
 case 1:
    console.log("Pendente");
    break;

 case 2:
    console.log("Pago");
    break;

 case 3:
    console.log("Processando");
    break;

 case 4:
    console.log("Enviado");
    break;

 case 5:
    console.log("Entregue");
    break;
default:
    console.log("Não há status");
}
//#endregion
//#region Atv.5
//Atividade 5 — Contador - Crie uma algoritmo que com "for" para imprimir 
// todos os numeros pares de 1 a 100.

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}
//#endregion
//#region Atv.6
//atividade 6 - Refaça o exercicio 5 agora usando for...of e while.

//while
let contador = 1;

while (contador <= 100) {
  if (contador % 2 === 0) {
    console.log(contador);
  }
  contador++;
}

// for...of

const numeros =[1,2,3,4,5,6,7,8,9,10];
for(const pares of numeros){
    if (pares % 2 === 0) {
    console.log(pares);
}
}

//#endregion
//#region Atv.7
//Atividade 7 — Crie um array com 10 nomes e exiba cada um dele usando for...of.
const nomes = ["Yasmin", "Helena", "Zanata", "Beatriz", "Luis", "Pitanga", "Vithor", "Murilo", "Kauan", "Vinicius"]
for(const nome of nomes){
    console.log(nome);
}
//#endregion

//#region Atv.8
//Atividade 8 - Crie um array com 10 números e exiba somente os nomes que tem mais 
// de 5 letras usando for...of, if e .length. 
const nomes8 = ["Yasmin", "Helena", "Zanata", "Beatriz", "Luis", "Pitanga", "Vithor", "Murilo", "Kauan", "Vinicius"]
for(const nome8 of nomes8){
    if (nome8.length >5) // Exibe os nomes com MAIS de 5 letras  //Kauan - 5 letras      Luis - 4 letras -> ficarão de fora
    console.log(nome8);
}

//#endregion
//#region Atv.9
//Atividade 9 — Somando valores
/*
    Dado o array de números, calcule a soma de todos os elementos do 
    array e exiba o resultado no console.
    Dica: você pode usar um loop for ou for...of para percorrer 
    o array e somar os valores.
    const numeros = [10, 20, 30, 40, 50];

*/
const numeros9 = [10, 20, 30, 40, 50];
let soma = 0
for(const numero9 of numeros9){
    soma = soma + numero9;
    console.log(soma);
}
//#endregion
//#region Atv.10
//Atividade 10 — Desafio do backend 

    //Dado o array abaixo, mostre somente o pedidos pagos 

    const pedidos = [
    { cliente: "Ana", valor: 150, pago: true },
    { cliente: "Carlos", valor: 300, pago: false },
    { cliente: "Maria", valor: 500, pago: true },
    { cliente: "João", valor: 200, pago: true },
    { cliente: "Luizinho", valor: 100, pago: true },
    { cliente: "Mel", valor: 243, pago: true },
    { cliente: "ND da VA", valor: 2400, pago: false },
    { cliente: "Ana", valor: 5400, pago: false },
    { cliente: "Lebron ", valor: 1200, pago: true }
];
for(let i = 0; i<pedidos.length; i++){
    if (pedidos[i].pago === true){
        console.log(pedidos[i]);
    }

}

//#endregion
//#endregion