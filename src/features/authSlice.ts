import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AuthState {
  id: string | null;
  token: string | null;
}

const initialState: AuthState = {
  id: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ id: string; token: string }>
    ) => {
      localStorage.setItem(
        'userCredentials',
        JSON.stringify({
          id: action.payload.id,
          token: action.payload.token,
        })
      );

      state.id = action.payload.id;
      state.token = action.payload.token;
    },
    logout: (state) => {
      localStorage.clear();
      state.id = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
