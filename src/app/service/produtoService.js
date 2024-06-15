import axios from 'axios';

class ProdutoService {
    constructor() {
        this.apiurl = 'http://localhost:8080/produtos';
    }

    obterProdutos(pagina, itensPorPagina) {
        return axios.get(`${this.apiurl}?page=${pagina}&size=${itensPorPagina}`);
    }

    criarProduto(produto) {
        return axios.post(this.apiurl, produto);
    }

    atualizarProduto(id, produto) {
        return axios.put(`${this.apiurl}/${id}`, produto);
    }

    deletarProduto(id) {
        return axios.delete(`${this.apiurl}/${id}`);
    }

    obterProdutoPorId(id) {
        return axios.get(`${this.apiurl}/${id}`);
    }
}

export default ProdutoService;
