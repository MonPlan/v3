import React, { Component } from 'react'
import './App.css'
import IntroCard from '../components/containers/IntroContainer'
import Feedback from '../components/containers/Feedback'
import Footer from '../components/containers/Footer'

import Status from '../components/StatusPopover'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="./images/logo_white.svg" width={200} alt="logo" />
          <div style={{ justifySelf: 'flex-end', flex: 1 }}>
            <Status />
          </div>
        </header>
        <div className="App-intro">
          <IntroCard />
          <Feedback />
          <IntroCard />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
