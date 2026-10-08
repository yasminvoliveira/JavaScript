//Async

//No promisse temos

buscarUsuario().then(usuario =>{
    console.log(usuario);
});

//No Async/await - Essa função vai funcionar de forma assincrona e
//vai ter um pedaço que vamos precisar esperar 

//No Async-await
async function buscarUsuarioAsync(){
    try{
    //aqui é que eu quero que aconteça
    const usuario = await buscarUsuario();
    console.log(usuario);
}
catch(erro){
    //erro de rolou
console.log(erro)
}
}