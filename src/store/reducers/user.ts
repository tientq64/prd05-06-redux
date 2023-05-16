import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
   const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
   )

   return response.data
})

type State = any

const initialState = {
   status: null,
   error: null,
   user: null
}

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchUser.pending, (state: State) => {
         state.status = 'loading'
         state.error = null
      })
      
      builder.addCase(fetchUser.fulfilled, (state: State, action) => {
         console.log('fulfilled', action)
         state.status = 'fulfilled'
         state.error = null
         state.user = action.payload
      })

      builder.addCase(fetchUser.rejected, (state: State, action) => {
         console.log('rejected', action)
         state.status = 'rejected'
         // state.error = null
      })
   }
})

export default userSlice.reducer
