import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Card from "../components/card";
import FormGroup from "../components/form-group";
import PadariaService from "../app/service/padariaService";
import { mensagemSucesso, mensagemErro } from "../components/toastr";

const CadastroPadaria = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaRepeticao, setSenhaRepeticao] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');

    const navigate = useNavigate();
    const service = new PadariaService();

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
        if (!cnpj) {
            mensagemErro('Por favor, preencha o campo CNPJ.');
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

        const padaria = { nome, email, senha, senhaRepeticao, cnpj, endereco, telefone };

        try {
            service.validar(padaria);
        } catch (erro) {
            if (erro && erro.mensagens) {
                erro.mensagens.forEach(msg => mensagemErro(msg));
            } else {
                mensagemErro('Erro ao validar os dados do usuário.');
            }
            return false;
        }

        service.salvar(padaria)
            .then(response => {
                mensagemSucesso('Padaria Cadastrada com Sucesso!');
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
                    <Card title="Cadastro de Padaria">
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
                            <FormGroup label="CNPJ: *" htmlFor="inputCnpj">
                                <input type="text" id="inputCnpj" className="form-control" name="cnpj" value={cnpj} onChange={e => setCnpj(e.target.value)} />
                            </FormGroup>
                            <FormGroup label="Endereço: *" htmlFor="inputEndereco">
                                <input type="text" id="inputEndereco" className="form-control" name="endereco" value={endereco} onChange={e => setEndereco(e.target.value)} />
                            </FormGroup>
                            <FormGroup label="Telefone: *" htmlFor="inputTelefone">
                                <input type="text" id="inputTelefone" className="form-control" name="telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
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

export default CadastroPadaria;
