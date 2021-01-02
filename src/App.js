import React from 'react'
import Header from './components/Header/Header'

import NavAside from './components/NavAside/NavAside'
import Content from "./components/MainContent/Content";

class App extends React.Component {
  render() {
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

export default App
