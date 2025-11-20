
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,          
  user: null,          
  isAuthenticated: false,
};


function createFakeJwt(username) {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = btoa(
    JSON.stringify({
      sub: username,
      role: 'user',
      iat: Date.now(),
    })
  );
  const signature = 'fake-signature';

  return `${header}.${payload}.${signature}`;
}

function decodeFakeJwt(token) {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const payload = JSON.parse(atob(parts[1]));
    return payload;
  } catch (e) {
    return null;
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      const { username } = action.payload;
      const token = createFakeJwt(username);
      const decoded = decodeFakeJwt(token);

      state.token = token;
      state.user = decoded;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions; 
export default authSlice.reducer;
