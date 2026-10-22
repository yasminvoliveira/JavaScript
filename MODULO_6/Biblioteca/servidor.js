// Servidor do Sistema da Biblioteca

// Imports
import http from "http";
import{livros} from "./livros.js";

// Lógica

const servidor = http.createServer((req, res) => {

    // Get / - API da biblioteca
    if(req.url === "/") {

        res.writeHead(200, {"Content-Import": "application/json"});

        res.end(JSON.stringify({
            mensagem: "Voce esta na API da Biblioteca da Locura"
        }));

        return;
    }
    else if(req.url === "/livros"){

        // Get livros
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(livros));

        return;
    }

    // Rota que não existe
    res.writeHead(404, {"Content-Type": "application/json"});
    res.end(JSON.stringify({
        erro: "Rota não encontrada"
        }),
    );

});

// Funções auxiliares

servidor.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
