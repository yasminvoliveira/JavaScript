//#regio Start Opradores
console.log("Start Operadores")
const idade = 20;

console.log(idade <= 18);

//#endregion
//#region Operadores matemáticos
console.log("Operadores matemáticos")
const a = 8;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a /b);
console.log(a % b); // Resto da divisão
//#endregion

//#region Operadores de Comparação
console.log("Operadores de Comparação")
const c = 10;
const d = 10;
console.log(c > d);
console.log(c < d);
console.log(c >= d);
console.log(c <= d);
console.log(c == d); //Comparação de valor
console.log(c === d); //Comparação de valor e tipo
console.log(c !== d); // Diferente

//#endregion

//#region Exercício
console.log("Exercício")
const idade1 = 20;
const idade2 = 25;

console.log(idade1 > idade2);
console.log(idade1 < idade2);
console.log(idade1 >= idade2);
console.log(idade1 <= idade2);
console.log(idade1 == idade2); //Comparação de valor
console.log(idade1 === idade2); //Comparação de valor e tipo
console.log(idade1 !== idade2); // Diferente
//#endregion

//#region Operadores lógicos
console.log("Operadores Lógicos")
const idade3 = 17;
const idade4 = 15;

//Operador lógico AND
console.log(idade3 > 18 && idade4 > 18); 

//Operador lógico OR
console.log(idade3 > 18 || idade4 > 18); 

//Operador lógico NOT
console.log(!(idade3 > 18 )); 

//#endregion

//region Combinando Operadores
console.log("Combinando Operadores")

const idade6 = 17;
const matriculaAtivo= true;

const podeComprar = idade6 >= 18 && matriculaAtivo;

console.log(podeComprar);
//#endregion

//#region Operadores de incremento e decremento
console.log("Operadores de incremento e decremento")
let numero = 10;
console.log(numero++); //10
console.log(numero); //11
console.log(++numero); //12

console.log(numero--); //12
console.log(numero); //11
console.log(--numero); //10
//#endregion

//#region Exercício 1 - Comparação
//Faça a comparação a partir da variável informada
console.log("Exercício 1 Operadores de Comparação")

const x = 5;
const y = 10;
const resultado = x < y;

console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y); 
console.log(x === y); 
console.log(x !== y);
//#endregion

//#region Exercício 2 - Comparação
console.log("Exercício 2 Operadores de Comparação")

console.log(10 == "10");

console.log(10 === "10");

console.log(true == 1);

console.log(true === 1);

console.log(null == undefined);

console.log(null === undefined);
//#endregion

//#region Exercício 3 - Sistema de acesso - Desafio
/*const dataNascimento = new Date("2000-02-29");
const ativo = true;*/
console.log("Exercício 3 Operadores de Comparação")

const DataNascimento = new Date("2005-02-17");
const Ativo = true;

const IdadeN = new Date() - DataNascimento
const podeAcessar = (IdadeN >= 18) && Ativo
console.log (podeAcessar);