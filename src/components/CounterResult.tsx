import { useSelector } from 'react-redux'

import { RootState } from '../store/types'

export function CounterResult() {
   const count = useSelector((s: RootState) => s.counter.count)

   return (
      <div>
         <h2>CounterResult</h2>

         <div>Count value: {count}</div>
      </div>
   )
}
