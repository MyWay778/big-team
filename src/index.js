import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import store from './redux/redux-store'
import {Provider} from "react-redux";

import App from "./App";
import './styles/styles.css'
import './styles/constants.css'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'))


