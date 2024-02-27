const Services = require('./Services.js');

class PessoaServices extends Services {
    constructor() {
        super('Pessoa');
    }

    async pegaMatriculasPorEstudante(id) {
        try {
            const estudante = await super.pegaUmRegistroPorId(id);
            const listaMatriculas = await estudante.getAulasMatriculadas();
            return listaMatriculas;
        }
        catch(error) {
            console.log('erro no serviço');
        }
    }
}

module.exports = PessoaServices;