import { useDispatch } from 'react-redux'

import {
   increment as incrementAction,
   decrement as decrementAction
} from '../store/reducers/counter'

import { fetchUser as fetchUserMiddleware } from './../store/reducers/user'

import { AppDispatch } from '../store/types'

export function Counter() {
   const dispatch = useDispatch<AppDispatch>()

   const increment = () => {
      dispatch(incrementAction({
         step: 2
      }))
   }

   const decrement = () => {
      dispatch(decrementAction())
   }

   const fetchUser = () => {
      dispatch(fetchUserMiddleware())
   }

   return (
      <div>
         <h2>Counter</h2>

         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>

         <button onClick={fetchUser}>Fetch user</button>
      </div>
   )
}
