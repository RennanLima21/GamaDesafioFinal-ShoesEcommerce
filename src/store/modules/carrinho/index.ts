/**
 * Criado por Lívia Alcântara da Silva Santana
 */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Produto{
    id:string;
    nome:string;
    preço:number;
    foto:string;
    descricao:string;
    categoria:string;
    tamanho:string;
}

interface EstadoCarrinho {
  carrinho: Produto[];
}

const initialState: EstadoCarrinho = {
  carrinho:[],
}

export const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarProduto: (state, action: PayloadAction<Produto>) => {
      state.carrinho = [...state.carrinho, action.payload];
    },
    excluirProduto: (state, action: PayloadAction<string>) => {
        const idProduto = action.payload;
        const novoCarrinho = state.carrinho.filter((produto)=>produto.id !== idProduto);
        state.carrinho = novoCarrinho;
    },
    esvaziarCarrinho: (state) => {
      state.carrinho = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { adicionarProduto, excluirProduto, esvaziarCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;