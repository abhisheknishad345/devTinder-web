
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import ServerWakeUp from "./components/ServerWakeUp";

import { store } from './utils/appStore.js'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from "@react-oauth/google";

  createRoot(document.getElementById('root')).render(
    
    
    <Provider store={store}>
      <ServerWakeUp>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
      </ServerWakeUp>
    </Provider>
 

)
