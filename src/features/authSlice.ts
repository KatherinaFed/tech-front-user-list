import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AuthState {
  id?: string | null;
  token: string | null;
  isAuth: boolean;
}

const initialState: AuthState = {
  id: null,
  token: null,
  isAuth: localStorage.getItem('userCredentials') ? true : false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ id?: string; token: string; isAuth: boolean }>
    ) => {
      localStorage.setItem(
        'userCredentials',
        JSON.stringify({
          id: action.payload.id,
          token: action.payload.token,
        })
      );

      return {
        ...state,
        id: action.payload.id,
        token: action.payload.token,
        isAuth: action.payload.isAuth,
      };
    },
    logout: (state) => {
      localStorage.clear();
      state.id = null;
      state.token = null;
      state.isAuth = false;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
