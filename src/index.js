import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import store from './redux/state'

import App from "./App";
import './styles/styles.css'
import './styles/constants.css'

const renderPage = (props) => {
    ReactDOM.render(
        <BrowserRouter>
            <App {...props}  />
        </BrowserRouter>,
        document.getElementById('root'))
}

store.subscribe(renderPage)
renderPage(store)
