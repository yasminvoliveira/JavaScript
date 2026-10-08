//Criar Arquivo
const fs = require("fs/promises");

async function criarArquivo() {
    const livros = [
        {
            id: 1,
            titulo: "Jogos Vorazes",
            autor: "Suzanne Collins"
        },
        {
            id: 2,
            titulo: "Em Chamas",
            autor: "Suzzane Collins"
        }
    ];

    //Criar o arquivo
    await fs.writeFile("Livros.json", JSON.stringify(livros, null, 2));

    console.log("Arquivo Criado com Sucesso!");
}


//Listar Livros
async function listarlivros() {
    //ler o arquivo
    const dados = await fs.readFile("Livros.json", "utf-8");
    //transformar para objeto
    const livros = JSON.parse(dados);
    //exibir no console (no futuro será o site)
    console.log(livros);
}
//Adicionar Livro

async function adicionarLivro() {
    //Ler o arquivo
    const dados = await fs.readFile("Livros.json", "utf-8");
    //transformar (parse)
    const livros = JSON.parse(dados);
    //add o livro (push)
    livros.push({
        id: 3,
        titulo: "A Esperança",
        autor: "Suzzane Collins"
    });
    //Transformar no json
    await fs.writeFile("Livros.json", JSON.stringify(livros, null, 2));

    //"Livro adicionado com sucesso"
    console.log("Livro adicionado com sucesso");
}
//Alterar Livros
async function alterarLivro(id) {
    //precisamos saber o livro

    ///Ler o arquivo
    const dados = await fs.readFile("Livros.json", "utf-8");
    //transformar 
    const livros = JSON.parse(dados);

    //descobri o livro
    const livro = livros.find((livro) => livro.id === id);
    //  logica - se não existir
    if (!livro) {
        console.log("Livro não encontrado");
        return;
    }
    //alterar o livro
    livro.autor = "Yasmin Oliveira";
    //transformar
    await fs.writeFile("Livros.json", JSON.stringify(livros, null, 2));
    // falar que deu certo
    console.log("Livro alterado com sucesso!")
}

//Deletar
async function deletarLivro(id) {
    ///Ler o arquivo
    const dados = await fs.readFile("Livros.json", "utf-8");
    //transformar 
    const livros = JSON.parse(dados);
   
    //logica nao- msg
    if (!livros) {
        console.log("Lista de livros não encontrado");
        return;
    }

     //procurar o livro a ser deletado e deletar
    const livrosAtualizados = livros.filter((livro) => livro.id !== id); 

    if (livrosAtualizados.lenght === livros.lenght){
        console.log("Livro", id, "não encontrado!");
    }

    //retransformar
    await fs.writeFile("Livros.json", JSON.stringify(livrosAtualizados, null, 2));

    //msg
    console.log("Livro deletado com sucesso")
}






//Função executar
async function executar() {
    await criarArquivo();
    await listarlivros();
    await adicionarLivro();
    await alterarLivro(1);
    await deletarLivro(3)
}

//chamando o inicio (endpoint)
executar()