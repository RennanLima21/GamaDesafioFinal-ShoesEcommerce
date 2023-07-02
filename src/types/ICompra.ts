export interface ICompra{
    id: number;
    nome: string;
    descricao: string;
    foto: string;
    preco: number;
    quantidade: number;
    categoriaId: number;
    qtdeDesejada: number;
}

export interface IPedido {
    id: number;
    idUsuario: number;
    idProduto: number;
    quantidadePedido: number;
  }