/* 
Um objeto representa uma "coisa" do mundo real através de
propriedades e comportamentos.

const nome = [] arrray
const nome = {} objeto
const arrayDeObjeto = [{}, {}, {}] <-- Mais comum
const ObjetoDeObjeto = {{}, {}, {}} <-- Pode acontecer também

*/

//#region Construindo 1 objeto

const aluno = {
    id: 1,
    nome: "Davi",
    idade: 17,
    curso: "Ensino Médio Integrado",
    RM: 87654,
    cadastroAtivo: true,
    email: null,
    hobby: ["ler", "bola", "xadrez"],
    endereco: {
        rua: "Rua 35, 405",
        bairro: "Jardim Itália",
        cidade: "Santa Rita do Passa Quatro",
        estado: "São Paulo",
        pais: "Brasil",
        cep: 13670000
    }
};

//console.log(aluno);

// Acessando propriedades dos objetos

//console.log(aluno.nome);

// Regra: Se o cadastroAtivo for = True, mensagem: Seja Bem-Vindo ao nossso sistema!

if(aluno.cadastroAtivo === true){
    console.log(aluno.nome + " , seja Bem-Vindo ao nossso sistema!")
}
else{
    console.log("O seu cadastro não está ativo! Procure as RH")
}

console.log(aluno.endereco.rua);


//Alterar propriedades do objeto

aluno.idade = 18;

console.log(aluno.idade);

//Alterar cadastroAtivo e bairro

aluno.cadastroAtivo = false;

aluno.endereco.bairro = "Jd. Lagoinha";

console.log(aluno.cadastroAtivo);
console.log(aluno.endereco.bairro);

// Adicionando propriedade
aluno.cpf = 45570410862;
aluno.telefone = "(19) 99318-1237";
console.log(aluno);

//deletar uma propriedade

delete aluno.curso;
console.log(aluno);

const {nome, idade, RM} = aluno;

console.log(nome);

//Renomeando com Destructuring
const{nome: nomeCompleto} = aluno;
console.log(nomeCompleto);

// #endregion

//#region Atividade 1

const filme = {
    titulo: "Homem-aranha",
    ano: 2026,
    genero: "Ação, Ficção",

    apresentar : function(){
         // this
        console.log("O melhor filme é " + filme.titulo); //mesmo resultado
        console.log(`O melhor filme é ${this.titulo}`); //mesmo resultado
    }
}
// Uma propriedade que se comporta como uma função.
filme.apresentar();

console.log(filme.titulo);

filme.ano = 2024;

filme.diretor = "Yasmin";

delete filme.genero;

console.log(filme);

// spread operator ... algo como espalhar

const dadosFamilia = {
    nomeMae: "Érika Araújo",
    nomePai: "Jorge Oliveira",
};

const usuario = {
    ...aluno,
    ...dadosFamilia,
    dataCadastro: "28/08/26"
};

console.log(usuario);


//Treinando

//Dados iniciais

const dadosPessoais = {
    nome: 'Guilherme',
    matricula: '20260828',
    curso:'Análise e Desenvolvimento de Sistemas'
};

const dadosContato = {
    email: 'guilherme@email.com',
    telefone: '(11)99999-9999'
}

//TODO 1 
const PerfilCompleto = {
    ...dadosPessoais,
    ...dadosContato
};
console.log(PerfilCompleto);

//TODO 2
const PerfilAtualizado = {
    ...dadosPessoais,
    status: "Matriculado"
};


PerfilAtualizado.curso = "Engenharia de Software";
console.log(PerfilAtualizado);

// #endregion

// #region 

//chaves do objeto
console.log(Object.keys(aluno));

console.log("------------------");
console.log(Object.values(aluno));

console.log("------------------");
console.log(Object.entries(aluno));


//Objeto x Json

//objeto passando para Json
const json = JSON.stringify(aluno);
console.log(json);

//JSON passando para objeto
const objeto = JSON.parse(json);
console.log(objeto);
