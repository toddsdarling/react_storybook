import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import services from './services';

export const fetchUserInfo = createAsyncThunk('user/getUserInfo', async () => {
  console.log('fetch user info');
  const response = await services.getUsers();
  return response.data[0];
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: 'Todd Darling',
    hireDate: '',
    role: '',
    teamLead: '',
  },
  reducers: {},
  extraReducers: {
    [fetchUserInfo.fulfilled]: (state, { payload }) => {
      state.userName = `${payload.first_name} ${payload.last_name}`;
      state.hireDate = '1/1/2021';
      state.role = payload.role;
      state.teamLead = `${payload.tl_first_name} ${payload.tl_last_name} `;
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
