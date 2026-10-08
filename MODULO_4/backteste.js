//Simulação

//Função auxiliar
const esperar = (ms) => new Promise(
    resolve => setTimeout(
        resolve,ms
    ));

//Fução BuscarUsuário
async function buscarUsuario(ID){
    await esperar(2000);

    return{
        id: ID,
        nome: "Robyn Rihanna",
        email:"Rihanna@email.com"
    }
}

//Função BuscarPedidos
async function buscarPedidos(usuarioID){
    await esperar(3000);

    const todosPedidos = [
        { id: 1, produto: "X-Tudo"},
        { id: 2, produto: "Coca-Cola"},
        { id: 3, produto: "X-Catupiry"},
    ];
    return todosPedidos.filter(pedido => pedido.id === usuarioID)
}

//Função executar
async function executar(){
    try{
       //buscar pedidos
        console.log("Buscando usuário...");
        const usuario = await buscarUsuario(1);
        console.log("Usuário encontrado: ", usuario)

        console.log("Buscando Pedidos pelo ID", usuario.id)
        const pedidos = await buscarPedidos(usuario.id);
        console.log ("Pedido encontrado foi: ", pedidos );
    
    }
    catch(erro)
    {
        console.log("Deu errado");
    }
}

executar();

//buscarpedidos