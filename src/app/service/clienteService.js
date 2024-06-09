import ApiService from "../apiservice";

class ClienteService extends ApiService {
    constructor() {
        super('/clientes');
    }

    salvar(cliente) {
        return this.post('', cliente);
    }

    validar(cliente) {
        const errors = [];

        if (!cliente.nome) {
            errors.push('O campo Nome é obrigatório.');
        }

        if (!cliente.email) {
            errors.push('O campo E-mail é obrigatório.');
        } else if (!cliente.email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
            errors.push('Informe um E-mail válido.');
        }

        if (!cliente.senha || !cliente.senhaRepeticao) {
            errors.push('Digite a senha 2x.');
        } else if (cliente.senha !== cliente.senhaRepeticao) {
            errors.push('As senhas não batem.');
        }

        if (!cliente.cpf) {
            errors.push('O campo CPF é obrigatório.');
        }

        if (!cliente.endereco) {
            errors.push('O campo Endereço é obrigatório.');
        }

        if (!cliente.telefone) {
            errors.push('O campo Telefone é obrigatório.');
        }

        if (!cliente.dataNascimento) {
            errors.push('O campo Data de Nascimento é obrigatório.');
        }

        if (errors && errors.length > 0) {
            throw new Error(errors);
        }
    }
}

export default ClienteService;
