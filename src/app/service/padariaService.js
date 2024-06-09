import ApiService from "../apiservice";

class PadariaService extends ApiService {
    constructor() {
        super('/padarias');
    }

    salvar(padaria) {
        return this.post('', padaria);
    }

    validar(padaria) {
        const errors = [];

        if (!padaria.nome) {
            errors.push('O campo Nome é obrigatório.');
        }

        if (!padaria.email) {
            errors.push('O campo E-mail é obrigatório.');
        } else if (!padaria.email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
            errors.push('Informe um E-mail válido.');
        }

        if (!padaria.senha || !padaria.senhaRepeticao) {
            errors.push('Digite a senha 2x.');
        } else if (padaria.senha !== padaria.senhaRepeticao) {
            errors.push('As senhas não batem.');
        }

        if (!padaria.cnpj) {
            errors.push('O campo CPF é obrigatório.');
        }

        if (!padaria.endereco) {
            errors.push('O campo Endereço é obrigatório.');
        }

        if (!padaria.telefone) {
            errors.push('O campo Telefone é obrigatório.');
        }

        if (errors && errors.length > 0) {
            throw new Error(errors);
        }
    }
}

export default PadariaService;
