import React from 'react'
import Header from './components/Header/Header'
import Content from './components/MainContent/Content'
import NavAside from './components/NavAside/NavAside'
import {BrowserRouter, Route} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
            <div className="page-wrapper">
                <Header/>
                <main>
                    <NavAside/>
                    <Content dialogsData = {this.props.dialogsData} posts={this.props.posts}/>
                </main>
                {/* <Footer /> */}
            </div>
        </BrowserRouter>
    )
  }
}

export default App
