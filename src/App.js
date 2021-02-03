import React from 'react'
import Header from './components/Header/Header'

import NavAside from './components/NavAside/NavAside'
import Content from "./components/MainContent/Content";
import {connect} from "react-redux";
import {initialize} from "./redux/appReducer"
import Preloader from "./components/MainContent/UsersContent/UsersCardContainer/UsersCard/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initialize()
    }
  render() {
        if (!this.props.successfulInitialization) {
            return <Preloader />
        }
    return (
            <div className="page-wrapper">
                <Header/>
                <main>
                    <NavAside />
                    <Content />
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

export default connect(mapStateToProps, {initialize})(App)
