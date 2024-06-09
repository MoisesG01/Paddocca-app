import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProdutoService from '../app/service/produtoService';
import { mensagemErro, mensagemSucesso } from '../components/toastr';
import { useNavigate } from 'react-router-dom';

const EditarProduto = () => {
    const { id } = useParams();
    const [edicaoProduto, setEdicaoProduto] = useState({});
    const produtoService = new ProdutoService();
    const navigate = useNavigate();

    useEffect(() => {
        produtoService.obterProdutoPorId(id)
            .then(response => {
                setEdicaoProduto(response.data);
            })
            .catch(error => {
                console.error("Erro ao carregar produto:", error.response?.data);
                mensagemErro(error.response?.data || 'Erro ao carregar produto');
            });
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEdicaoProduto({ ...edicaoProduto, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        produtoService.atualizarProduto(edicaoProduto)
            .then(response => {
                mensagemSucesso('Produto atualizado com sucesso!');
                setEdicaoProduto({});
                navigate('/produtos');
            })
            .catch(error => {
                console.error("Erro ao atualizar produto:", error.response?.data);
                mensagemErro(error.response?.data || 'Erro ao atualizar produto');
            });
    };

    return (
        <div style={{ marginTop: '150px' }}>
            <div className="container mt-5">
                <h1>Editar Produto</h1>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                        <input type="text" className="form-control" id="id" name="id" value={edicaoProduto.id || ''} onChange={handleInputChange} style={{ display: 'none' }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" className="form-control" id="nome" name="nome" value={edicaoProduto.nome || ''} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descricao">Descrição:</label>
                        <textarea className="form-control" id="descricao" name="descricao" value={edicaoProduto.descricao || ''} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="categoria">Categoria:</label>
                        <input type="text" className="form-control" id="categoria" name="categoria" value={edicaoProduto.categoria || ''} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="preco">Preço:</label>
                        <input type="number" step="0.01" className="form-control" id="preco" name="preco" value={edicaoProduto.preco || ''} onChange={handleInputChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        </div>
    );
};

export default EditarProduto;
