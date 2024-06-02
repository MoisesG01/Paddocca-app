class ProdutoService {
    obterProdutos(pagina, itensPorPagina) {
        const todosProdutos = [
            { id: 1, nome: 'Produto 1', preco: 10 },
            { id: 2, nome: 'Produto 2', preco: 20 },
            { id: 3, nome: 'Produto 3', preco: 30 },
            { id: 4, nome: 'Produto 4', preco: 40 },
            { id: 5, nome: 'Produto 5', preco: 50 },
            { id: 6, nome: 'Produto 6', preco: 60 },
            { id: 7, nome: 'Produto 7', preco: 70 },
            { id: 8, nome: 'Produto 8', preco: 80 },
            { id: 9, nome: 'Produto 9', preco: 90 },
            { id: 10, nome: 'Produto 10', preco: 100 },
            { id: 11, nome: 'Produto 11', preco: 110 },
            { id: 12, nome: 'Produto 12', preco: 120 },
            { id: 13, nome: 'Produto 13', preco: 130 },
            { id: 14, nome: 'Produto 14', preco: 140 },
            { id: 15, nome: 'Produto 15', preco: 150 },
            { id: 16, nome: 'Produto 16', preco: 160 },
            { id: 17, nome: 'Produto 17', preco: 170 },
            { id: 18, nome: 'Produto 18', preco: 180 },
            { id: 19, nome: 'Produto 19', preco: 190 },
            { id: 20, nome: 'Produto 20', preco: 200 },
            { id: 21, nome: 'Produto 21', preco: 10 },
            { id: 22, nome: 'Produto 22', preco: 20 },
            { id: 23, nome: 'Produto 23', preco: 30 },
            { id: 24, nome: 'Produto 24', preco: 40 },
            { id: 25, nome: 'Produto 25', preco: 50 },
            { id: 26, nome: 'Produto 26', preco: 60 },
            { id: 27, nome: 'Produto 27', preco: 70 },
            { id: 28, nome: 'Produto 28', preco: 80 },
            { id: 29, nome: 'Produto 29', preco: 90 },
            { id: 30, nome: 'Produto 30', preco: 100 },
            { id: 31, nome: 'Produto 31', preco: 110 },
            { id: 32, nome: 'Produto 32', preco: 120 },
            { id: 33, nome: 'Produto 33', preco: 130 },
            { id: 34, nome: 'Produto 34', preco: 140 },
            { id: 35, nome: 'Produto 35', preco: 150 },
            { id: 36, nome: 'Produto 36', preco: 160 },
            { id: 37, nome: 'Produto 37', preco: 170 },
            { id: 38, nome: 'Produto 38', preco: 180 },
            { id: 39, nome: 'Produto 39', preco: 190 },
            { id: 40, nome: 'Produto 40', preco: 200 },
        ];

        const totalProdutos = todosProdutos.length;
        const totalPaginas = Math.ceil(totalProdutos / itensPorPagina);
        const inicio = (pagina - 1) * itensPorPagina;
        const fim = inicio + itensPorPagina;
        const produtosPagina = todosProdutos.slice(inicio, fim);

        return new Promise((resolve) => {
            resolve({ data: { produtos: produtosPagina, totalPaginas } });
        });
    }
}

export default ProdutoService;
