import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/card';
import FormGroup from '../components/form-group';
import UsuarioService from '../app/service/usuarioService';
import LocalStorageService from '../app/service/localstorageService';
import { mensagemErro } from '../components/toastr';
import { AuthConsumer } from '../main/provedorAutenticacao'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const service = new UsuarioService();

    const entrar = (contexto) => { 
        service.autenticar({ email, senha }).then(response => {
            LocalStorageService.adicionarItem('_usuario_logado', response.data);
            contexto.iniciarSessao(response.data); 
            navigate('/home');
        }).catch(erro => {
            mensagemErro(erro.response?.data);
        });
    };

    const prepareCadastrar = () => {
        navigate('/tipo-perfil');
    };

    return (
        <AuthConsumer>
            {(contexto) => ( 
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <div className='col-md-6'>
                        <div className='bs-docs-section'>
                            <Card title="Login">
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='bs-component'>
                                            <fieldset>
                                                <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                                                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Digite o Email' />
                                                </FormGroup>
                                                <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                                    <input type='password' value={senha} onChange={e => setSenha(e.target.value)} className='form-control' id='exampleInputPassword1' placeholder='Password' />
                                                </FormGroup>
                                                <button onClick={() => entrar(contexto)} className='btn btn-success'>
                                                    <i className="pi pi-sign-in"></i> Entrar
                                                </button>
                                                <button onClick={prepareCadastrar} className='btn btn-danger'>
                                                    <i className="pi pi-plus"></i> Cadastrar
                                                </button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            )}
        </AuthConsumer>
    );
}

export default Login;
