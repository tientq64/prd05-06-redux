import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from './store'
import { Counter } from './components/Counter'
import { CounterResult } from './components/CounterResult'

import './App.css'

function App() {
   return (
      <Provider store={store}>
         <PersistGate persistor={persistor} loading={null}>
            <div>
               <h1>App</h1>

               <Counter />
               <CounterResult />
            </div>
         </PersistGate>
      </Provider>
   )
}

export default App
