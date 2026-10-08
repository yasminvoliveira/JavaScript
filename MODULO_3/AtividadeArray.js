//#region -  Manipulação básica

const frutas = ["Maçã", "Banana", "Laranja", "Pera", "Limão", "Mexirica"];


//Adicione "Morango" no final.
frutas.push("morango");
console.log(frutas);

//Adicione "Abacaxi" no início.
frutas.unshift("Abacaxi");
console.log(frutas);

//Remova o último elemento.
frutas.pop();
console.log(frutas);

//Remova o primeiro elemento.
frutas.shift();
console.log(frutas);

//Mostre a quantidade de frutas.
console.log(frutas.length);

//#endregion

//#region - forEach

const nomes = [
    "Ana",
    "Carlos",
    "João",
    "Maria", 
    "Claudia", 
    "Adriana",
    "Cesar",
    "Asafe"
];
//Utilize forEach para mostrar: Olá, Ana! .... .assim por diante 
//#endregion
nomes.forEach((nomes) => {
    console.log(`Olá, ${nomes}!`);
});

//#region map

const precos = [10, 20, 30, 40, 50, 60, 70, 80];

//Crie um novo array com os preços acrescidos de 10%.
const precosComPorcentagem = precos.map((precos) => {
    return (precos * 1.1);
});
console.log(precosComPorcentagem);
console.log("-------------------------")

//#endregion

//#region filter
const numeros = [5, 12, 18, 25, 30, 7, 40];

//Crie um novo array somente com números maiores que 20.
const Maior20 = numeros.filter((numeros) => {
    return numeros > 20;
});
console.log(Maior20);

console.log("-------------------------")

//#endregion

//#region find
const listaNumeros = [5, 12, 18, 25, 30];

//Encontre o primeiro número maior que 20.
const NumeroMaiorVinte = numeros.find((n) => n > 20);
console.log(NumeroMaiorVinte);

console.log("-------------------------")
//#endregion

//#region some
const idades = [12, 15, 17, 20, 14];

//Existe alguém maior de idade? Utilize o some para encontrar! 
const MaiorIdade = idades.some(n=> n >= 18);
console.log(MaiorIdade);

//every
//Usando o array acima codifique respondendo: Todos são maiores de idade?
const TodosMaiores = idades.every(n=> n >= 18);
console.log(TodosMaiores);
console.log("-------------------------")
//#endregion

//#region reduce
//Calcule o valor total.
const valores = [100, 200, 50, 150];
const soma = valores.reduce((total, numero) => {
    return total + numero;
}, 0);
console.log(soma);
console.log("-------------------------")

//#endregion