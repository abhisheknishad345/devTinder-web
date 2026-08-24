
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import ServerWakeUp from "./components/ServerWakeUp";

import { store } from './utils/appStore.js'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(

  
    <Provider store={store}>
      <ServerWakeUp>
        <App />
      </ServerWakeUp>
    </Provider>
 

)
