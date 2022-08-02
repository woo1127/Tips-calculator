import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
        <h1 className='app-name'>spli<br></br>tter</h1>
        <App />
    </>
)
