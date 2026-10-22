//imports
import http from "http";

// logica
const servidor = http.createServer((req,res)=>{
    //headers
    res.setHeader("Content-Type", "text/html; charset=utf-8");
   
    // body - logicas das rotas
    if(req.url === "/"){
        res.end("Página Inicial");
    }else if(req.url === "/livros"){
    // ir no banco de dados, fazer um select na tabela de livros, tranformar em json e devolver para o front
        res.end("Página de livros");
    }
    else if(req.url === "/usuarios"){
    // ir no banco de dados, fazer um select na tabela de usuarios, tranformar em json e devolver para o front
        res.end("Página de usuarios");
    }
});

servidor.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000")
});

//funções auxiliares
