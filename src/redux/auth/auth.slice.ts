import { createSlice } from '@reduxjs/toolkit'
import { getUsers } from './auth.thunk'

export const authSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    loading: 'idle',
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getUsers.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload
        state.loading = 'idle'
      }
    })
    builder.addCase(getUsers.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = true
      }
    })
  },
})
export default authSlice.reducer