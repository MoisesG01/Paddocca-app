import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Card from "../components/card";
import FormGroup from "../components/form-group";
import UsuarioService from "../app/service/usuarioService";
import { mensagemSucesso, mensagemErro } from "../components/toastr";

const CadastroCliente = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaRepeticao, setSenhaRepeticao] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    const navigate = useNavigate();
    const service = new UsuarioService();

    const cadastrar = () => {
        if (!nome) {
            mensagemErro('Por favor, preencha o campo Nome.');
            return;
        }
        if (!email) {
            mensagemErro('Por favor, preencha o campo E-mail.');
            return;
        }
        if (!senha) {
            mensagemErro('Por favor, preencha o campo Senha.');
            return;
        }
        if (!senhaRepeticao) {
            mensagemErro('Por favor, preencha o campo Repetir Senha.');
            return;
        }
        if (!cpf) {
            mensagemErro('Por favor, preencha o campo CPF.');
            return;
        }
        if (!endereco) {
            mensagemErro('Por favor, preencha o campo Endereço.');
            return;
        }
        if (!telefone) {
            mensagemErro('Por favor, preencha o campo Telefone.');
            return;
        }
        if (!dataNascimento) {
            mensagemErro('Por favor, preencha o campo Data de Nascimento.');
            return;
        }

        const usuario = { nome, email, senha, senhaRepeticao, cpf, endereco, telefone, dataNascimento };

        try {
            service.validar(usuario);
        } catch (erro) {
            if (erro && erro.mensagens) {
                erro.mensagens.forEach(msg => mensagemErro(msg));
            } else {
                mensagemErro('Erro ao validar os dados do usuário.');
            }
            return false;
        }

        service.salvar(usuario)
            .then(response => {
                mensagemSucesso('Cliente Cadastrado com Sucesso!');
                navigate('/login');
            })
            .catch(erro => {
                mensagemErro(erro.response?.data);
            });
    };

    const cancelar = () => {
        navigate('/login');
    };

    return (
        <div style={{ marginTop: '200px' }}>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="col-md-6">
                    <Card title="Cadastro de Cliente">
                        <div className="bs-component">
                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text" id="inputNome" className="form-control" name="nome" value={nome} onChange={e => setNome(e.target.value)} />
                            </FormGroup>
                            <FormGroup label="E-mail: *" htmlFor="inputEmail">
                                <input type="email" id="inputEmail" className="form-control" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                            </FormGroup>
                            <FormGroup label="Senha: *" htmlFor="inputSenha">
                                <input type="password" id="inputSenha" className="form-control" name="senha" value={senha} onChange={e => setSenha(e.target.value)} />
                            </FormGroup>
                            <FormGroup label="Repetir Senha: *" htmlFor="inputRepitaSenha">
                                <input type="password" id="inputRepitaSenha" className="form-control" name="senhaRepeticao" value={senhaRepeticao} onChange={e => setSenhaRepeticao(e.target.value)} />
                            </FormGroup>
                            <FormGroup label="CPF: *" htmlFor="inputCpf">
                                <input type="text" id="inputCpf" className="form-control" name="cpf" value={cpf} onChange={e => setCpf(e.target.value)} />
                            </FormGroup>
                            <FormGroup label="Endereço: *" htmlFor="inputEndereco">
                                <input type="text" id="inputEndereco" className="form-control" name="endereco" value={endereco} onChange={e => setEndereco(e.target.value)} />
                            </FormGroup>
                            <FormGroup label="Telefone: *" htmlFor="inputTelefone">
                                <input type="text" id="inputTelefone" className="form-control" name="telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
                            </FormGroup>
                            <FormGroup label="Data de Nascimento: *" htmlFor="inputDataNascimento">
                                <input type="date" id="inputDataNascimento" className="form-control" name="dataNascimento" value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} />
                            </FormGroup>
                            <button type="button" onClick={cadastrar} className='btn btn-success'>
                                <i className="pi pi-save"></i> Salvar
                            </button>
                            <button type="button" onClick={cancelar} className='btn btn-danger'>
                                <i className="pi pi-times"></i> Cancelar
                            </button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default CadastroCliente;
