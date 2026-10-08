const usuarios = [
    {
        id: 1,
        nome: "Yasmin",
        whats: "1999531-1237",
        email: "yasmin.zullo@gmail.com",
        cep: "13672214"
    },
    {
        id: 2,
        nome: "Helena",
        whats: "1999318-3437",
        email: "helena.octaviano@gmail.com",
        cep: "13672143"
    },
    {
        id: 3,
        nome: "Luciana",
        whats: "19971361089",
        email: "luciana.zanata@gmail.com",
        cep: "13672364"
    },

]

//Função buscarUsuario
async function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuario = usuarios.find(usuario => usuario.id === id);
            if (usuario) {
                resolve(usuario);
            }
            else {
                reject("Usuario não encontrado");
            }
        }, 1000);
    });
}

module.exports = {
    buscarUsuario
};