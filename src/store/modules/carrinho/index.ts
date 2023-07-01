/**
 * Criado por Lívia Alcântara da Silva Santana
 */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {ICompra} from "../../../types/ICompra";

interface EstadoCarrinho {
  carrinho: ICompra[];
}

const initialState: EstadoCarrinho = {
  carrinho:[],
}

export const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarProduto: (state, action: PayloadAction<ICompra>) => {
      const produtoNoCarrinho = state.carrinho.some(produto => produto.id ===action.payload.id);
      if(produtoNoCarrinho){
        alert("Este produto já está no carrinho!");
      }
      else{
        state.carrinho = [...state.carrinho, action.payload];
      }
    },
    excluirProduto: (state, action: PayloadAction<number>) => {
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