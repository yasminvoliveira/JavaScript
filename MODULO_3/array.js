const frutas = ["maçã", "banana", "laranja", "uva", "abacaxi", "pera"];


//Acessando elementos do array
console.log(frutas[4]);

//Contando elementos do array
console.log(frutas.length);


//Acessando o ultimo elemento do array
console.log(frutas[frutas.length - 1]);  // O total de frutas é 6 (length = 6), porém quando queremos encontrar um objeto o índice se inicia do 0, sendo assim o último elemento 5 (pera)


//Alterando elemento do array
frutas[1]= "Morango";  // alterando elemento do índice 1 = "banana" --> "Morango"
console.log(frutas);


//Colocando por último do array
frutas.push("morango");
console.log(frutas);

//Colocando em primeiro do array
frutas.unshift("manga");
console.log(frutas);

//Deleta o último elemento
frutas.pop();
console.log(frutas);

//Deleta o primeiro elemento
frutas.shift();
console.log(frutas);


const itemRemovido = frutas.pop();
console.log(itemRemovido);

//Varrendo
for (const fruta of frutas) {
    console.log(fruta);
    return fruta; //Relembrando
}



//Varrendo o array

//ForEach executa uma função para cada elemento do array.
//Eles fazem algo semelhante, mas  forEach é específico para percorrer
//uma coleção e executar uma ação para cada elemento.

frutas.forEach((fruta) => {
    console.log(fruta);
});

frutas.forEach((fruta) =>{
    const nomeFrutaPrimeiraLetraMaiuscula =
    fruta.charArt(0).toUpperCase() + fruta.slice(1);
    console.log(nomeFrutaPrimeiraLetraMaiuscula);
});



const numeros = [1, 2, 3, 4, 5, 6];

//map - cria um novo array com elementos modificados
//como eu quero transformar cada elemento?
const numeros_dobrados = numeros.map((numero) => {
    return numero / 2;
});
console.log(numeros_dobrados);

console.log("-----------------------")

//filter - cria um array novo com os elementos que atendem a uma condição:
//quais elementos eu quero manter?
const maiores_que_3 = numeros.filter((numero) => {
    return numero > 3;
});
console.log(maiores_que_3)

console.log("-----------------------")

//find - procura um elemento que satisfaça uma condição:
//ele mostra o primeiro número que atende a condição
const numerof = numeros.find((n) => n > 4);
console.log(numerof);

//some - verifica se pelo menos um elemento atende a uma condição
const existeMaiorQue5 = numeros.some(n=> n > 8);
console.log(existeMaiorQue5);

//every - verifica se todos os elementos atendem a uma condição
//retora true ou false (boolean)
const existeMaiorQue0 = numeros.every(n=> n > 0);
console.log(existeMaiorQue0);

//reduce - reduz o array a um único valor,
// aplicando uma função a cada elemento
const soma = numeros.reduce((total, numero) => {
    return total + numero;
}, 2);
console.log(soma);
const produtos = [
    { nome: "Produto 1", disponivel: true},
    { nome: "Produto 2", disponivel: false},
    { nome: "Produto 3", disponivel: true},
    { nome: "Produto 4", disponivel: true}
];

//for of
const produtosDisponiveis = []
for(const produto of produtos){
    if (produto.disponivel === true){
       produtosDisponiveis.push(produto.nome);
    }
};
console.log(produtosDisponiveis);


//map e fliter
//map

const prodDisponiveisMap = produtos
.filter((produto) => produto.disponivel === true)
.map((produto) => produto.nome);

console.log(prodDisponiveisMap);