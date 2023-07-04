import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUsuario } from "../../../types/IUsuario";

interface LoginResponse {
  token: string;
  usuario: IUsuario;
}

interface UserState {
  usuario: IUsuario | null;
  token: string | null;
}

const token =
  localStorage.getItem("@desafio4-grupo3:token") || null;

const initialState: UserState = {
  usuario: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginResponse>) => {
      localStorage.setItem(
        "@desafio4-grupo3:token",
        action.payload.token
      );

      state.usuario = action.payload.usuario;
      state.token = action.payload.token;
    },
    logout: (state) => {
      localStorage.removeItem("@desafio4-grupo3:token");

      state.token = null;
      state.usuario = null;
    },
    setUsuario: (state, action: PayloadAction<IUsuario>) => {
      state.usuario = action.payload;
    },
  },
});

export const { login, logout, setUsuario } =
  authSlice.actions;

export default authSlice.reducer;