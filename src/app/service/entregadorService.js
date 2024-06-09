import ApiService from "../apiservice";

class EntregadorService extends ApiService {
    constructor() {
        super('/entregadores');
    }

    salvar(entregador) {
        return this.post('', entregador);
    }

    validar(entregador) {
        const errors = [];

        if (!entregador.nome) {
            errors.push('O campo Nome é obrigatório.');
        }

        if (!entregador.email) {
            errors.push('O campo E-mail é obrigatório.');
        } else if (!entregador.email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
            errors.push('Informe um E-mail válido.');
        }

        if (!entregador.senha || !entregador.senhaRepeticao) {
            errors.push('Digite a senha 2x.');
        } else if (entregador.senha !== entregador.senhaRepeticao) {
            errors.push('As senhas não batem.');
        }

        if (!entregador.cpf) {
            errors.push('O campo CPF é obrigatório.');
        }

        if (!entregador.endereco) {
            errors.push('O campo Endereço é obrigatório.');
        }

        if (!entregador.telefone) {
            errors.push('O campo Telefone é obrigatório.');
        }

        if (!entregador.dataNascimento) {
            errors.push('O campo Data de Nascimento é obrigatório.');
        }

        if (errors && errors.length > 0) {
            throw new Error(errors);
        }
    }
}

export default EntregadorService;
