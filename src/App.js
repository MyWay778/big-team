import React from 'react'
import Header from './components/Header/Header'

import NavAside from './components/NavAside/NavAside'
import Content from "./components/MainContent/Content";
import {connect, Provider} from "react-redux";
import {initialize} from "./redux/appReducer"
import Preloader from "./components/MainContent/UsersContent/UsersCardContainer/UsersCard/Preloader/Preloader";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";

class App extends React.Component {
    componentDidMount() {
        this.props.initialize()
    }

    render() {
        if (!this.props.successfulInitialization) {
            return <div className="center-position">
                <Preloader/>
            </div>
        }
        return (
            <div className="page-wrapper">
                <Header/>
                <main>
                    <NavAside/>
                    <Content/>
                </main>
                {/* <Footer /> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        successfulInitialization: state.appReducer.successfulInitialization
    }
}

const AppContainer = connect(mapStateToProps, {initialize})(App)

const BigTeamApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default BigTeamApp



