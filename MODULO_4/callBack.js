//CallBack

/*
*Se você edir uma operação que demora muito o node não precisar esperar parado*/ 


console.log("1");  //|
console.log("2");  //}  Síncrono 
console.log("3");  //|

//------------------------------------


console.log("Início");

setTimeout(() => {
    console.log("Processamento acabou")  //Ele acabou depois, processou enquanto 
}, 2000);                                // outras coisas rodavam.

console.log("Fim")

//Callback é uma função usada para outra função para ser executada posteriormente

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numeros.forEach((n) => {    //|
    console.log(n);         //} isso é o callback 
});                         //| rodar uma coisa só quando for chamado.

function processarUsuario(nome, callback) {
    console.log("Processando " + nome);
    callback();
};

processarUsuario("Rihanna", () => {    //Aqui começa o código, quando chamo a função
    console.log("Usuário Processado");
});

//----------------------------------------------

function buscarUsuario(callback) {
    //simulação de tempo
    setTimeout(() => {
        //construindo um objeto
        const usuario = {
            id: 1,
            nome: "Rihanna"
        };
        callback(usuario)
    }, 2000)
}

console.log("início da chamada");

buscarUsuario((usuario) => {
    console.log(usuario);
});

//4
console.log("Fim do processo");

/*
// Problema do callback
buscarUsuario => buscarPedido => buscarProduto => CalcularTotal
*/