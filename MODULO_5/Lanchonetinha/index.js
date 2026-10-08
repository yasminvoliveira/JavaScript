//exports e imports
const fs = require("fs/promises")
const { buscarUsuario } = require("./usuarios");
const { buscarProduto } = require("./produtos");
const { buscarPedidos } = require("./pedidos");

module.import = {
    buscarUsuario,
    buscarProduto,
    buscarPedidos
};

//função
async function fecharConta(usuarioId) {
    try {
        console.log("Buscando Usuário...")
        const usuario = await buscarUsuario(usuarioId);
        console.log(usuario);

        //Pedido
        console.log("Buscando pedido...");
        const pedidos = await buscarPedidos(usuario.id);

        //Total geral
        let totalGeral = 0;

        //Array para os itens
        const itensConta = [];

        //varrer os pedidos --> procurar pedidos do cliente

        //varrer os itens (produtos) e add (push) os itens na conta

        //estrutura da comanda
        for (const pedido of pedidos) {
            const produto = await buscarProduto(pedido.produtoId);
            const subTotal = produto.preco * pedido.quantidade;

            itensConta.push({
                item: produto.nome,
                quantidade: pedido.quantidade,
                precoUnitario: produto.preco,
                subTotal: subTotal
            });
            totalGeral += subTotal;
        }

        // construir nosso arquivo
        const comanda = {
            estabelecimento: "Five",
            cliente: {
                id: usuario.id,
                nome: usuario.nome
            },
            itens: itensConta,
            totalPagar: totalGeral
        }
        await fs.writeFile("comanda_clientes.json", JSON.stringify(comanda, null, 2), "utf-8");
    }
    catch (erro) {
        console.error("Erro ao fechar a conta", erro)
    }
}

fecharConta(1)
