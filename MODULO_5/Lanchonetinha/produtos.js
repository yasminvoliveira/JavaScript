const produtos = [
    {
        id: 1,
        nome: "Five American",
        preco: 32
    },
    {
        id: 2,
        nome: "Five BBQ",
        preco: 39
    },
    {
        id: 3,
        nome: "Five Pool",
        preco:46
    },
    {
        id:4,
        nome: "Five Germany",
        preco:42
    }
];

async function buscarProduto(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const produto = produtos.find(produto => produto.id === id);
            if (produto) {
                resolve(produto);
            }
            else {
                reject("Produtos não encontrado");
            }
        }, 1000);
    });
}

module.exports = {
    buscarProduto
};