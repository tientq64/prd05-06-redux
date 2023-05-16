import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
   count: 3
}

type Action = PayloadAction<{
   step?: number
} | undefined>

const counterSlice = createSlice({
   name: 'counter',
   initialState,

   reducers: {
      increment: (state, action: Action) => {
         const step = action.payload?.step ?? 1
         state.count = state.count + step
      },

      decrement: (state, action: Action) => {
         const step = action.payload?.step ?? 1
         state.count = state.count - step
      }
   }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
