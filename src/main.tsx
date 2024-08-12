import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'

import App from './app.tsx'
import './index.css'
import store from './app/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
