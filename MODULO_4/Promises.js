//Promises - é uma promssa de que teremos um resultado no futuro

//Criando uma promises

const promessa = new Promise((resolve, reject) => {
    const sucesso = true;

    if(sucesso === true){
        resolve("Tudo certo!!")
    }
    else{
        reject("Deu errado!!")
    }
});

//Consumir a promise

promessa.then((resultado) => {
        console.log(resultado);
})
    .catch((erro) => {
        console.log(erro)
    });
