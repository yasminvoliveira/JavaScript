//#region ante só true or false
const idade = 20;

if (idade >= 18) {
    console.log("Maior de idade");
}
 //#endregion

 //#region if else

const idade1 = 16;

// em js usamos as chaves para delimitar um bloco de código 

if (idade1 >= 18){
    console.log("Maior de idade");
} else{
    console.log("Menor de idade");
}
//-------
const nota = 7;

if (nota > 7){
    console.log("Aprovado");}

if (nota == 7){
    console.log("Recuperação");}
 else{
    console.log("Reprovado");
}

//#endregion

//#region 

const senha = 20;
const email = "dddddd@gmail.com"
const ativo = true;

if (senha === 18 && email === "dddddd@gmail.com" && ativo ){
    console.log("Usuário autorizado");
}

else{
    console.log("Acesso Negado");
}
//#endregion

//#region switch case

//switch case
const dia = 6
switch(dia){
 case 1:
    console.log("Domingo");
    break;

 case 2:
    console.log("Segunda-feira");
    break;

 case 3:
    console.log("Terça-feira");
    break;

 case 4:
    console.log("Quarta-feira");
    break;

 case 5:
    console.log("Quinta-feira");
    break;

case 6:
    console.log("Sexta-feira");
    break;

case 7:
    console.log("Sábado");
    break;
default:
    console.log("Dia não encontrado");
}

/* 
    Quando usar o switch case?
    -Quando temos muitas condições para verificar.
    -Quando temos uma variável que pode ter muitos valores diferentes.
    -Quando queremos deixar o código mais legível.

    Quando usar if/else?
    -Quando temos poucas condições para verificar.
*/
//#endregion

//#region operador ternário

const idade2 = 20;

//pode refazer com o operador ternario

const mensagem = idade2 >=18? "Maior" : "Menor";
console.log(mensagem)

/* 
    Quando usar o operador ternário?
    -Quando temos uma condição simples.
    -Quando queremos deixar o código mais legível.
    */

//#endregion

//#region laços

//while, for

//while - enquanto for verdade

let contador = 1;

while(contador <=6){
    console.log(contador);
    contador++;
}
//#endregion

//#region for
//for(//iniciação; condição; incremento)

for(let i = 1; i  <= 5; i++){
    console.log(i);
}

//for...of
const frutas = ["Morango", "Banana", "Maçã", "Ameixa", "Uva"];
for(const fruta of frutas){
    console.log(fruta);
}
//tradicional
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}
//#endregion
