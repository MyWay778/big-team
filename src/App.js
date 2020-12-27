import React from 'react'
import Header from './components/Header/Header'
import Content from './components/MainContent/Content'
import NavAside from './components/NavAside/NavAside'

class App extends React.Component {
  render() {
      const state = this.props.getState()
      const dispatch = this.props.dispatch.bind(this.props)
    return (
            <div className="page-wrapper">
                <Header/>
                <main>
                    <NavAside state={state.friendsData}/>
                    <Content state={{dialogsData:state.dialogsData, postsData:state.postsData }} dispatch={dispatch} />
                </main>
                {/* <Footer /> */}
            </div>
    )
  }
}

export default App
