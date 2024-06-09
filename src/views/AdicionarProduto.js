import React, { useState } from 'react';
import ProdutoService from '../app/service/produtoService';
import { mensagemSucesso, mensagemErro } from '../components/toastr';

const AdicionarProduto = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [preco, setPreco] = useState('');
    const [idPadaria, setIdPadaria] = useState('');

    const produtoService = new ProdutoService();

    const handleSubmit = () => {
        const produto = { nome, descricao, categoria, preco, idPadaria };
        produtoService.criarProduto(produto)
            .then(response => {
                mensagemSucesso('Produto cadastrado com sucesso!');
                setNome('');
                setDescricao('');
                setCategoria('');
                setPreco('');
                setIdPadaria('');
            })
            .catch(error => {
                mensagemErro(error.response?.data || 'Erro ao cadastrar produto');
            });
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Adicionar Produto</h2>
            <div className="form-group">
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" className="form-control" value={nome} onChange={e => setNome(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="descricao">Descrição:</label>
                <input type="text" id="descricao" className="form-control" value={descricao} onChange={e => setDescricao(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="categoria">Categoria:</label>
                <input type="text" id="categoria" className="form-control" value={categoria} onChange={e => setCategoria(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="preco">Preço:</label>
                <input type="number" id="preco" className="form-control" value={preco} onChange={e => setPreco(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="idPadaria" style={{ display: 'none' }}>ID da Padaria:</label>
                <input type="text" id="idPadaria" className="form-control" value={idPadaria} onChange={e => setIdPadaria(e.target.value)} style={{ display: 'none' }}/>
            </div>
            <button onClick={handleSubmit} className="btn btn-success">Adicionar Produto</button>
        </div>
    );
};

export default AdicionarProduto;
