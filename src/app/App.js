import React, { Component } from 'react'
import './App.css'
import IntroCard from '../components/containers/IntroContainer'
import Feedback from '../components/containers/Feedback'
import Footer from '../components/containers/Footer'

import Status from '../components/StatusPopover'
import trianglify from 'trianglify'
import { blueGrey, lightBlue } from 'material-ui/colors'
var pattern = trianglify({
  width: 1500,
  height: 1500,
  x_colors: ['#006cab', '#006dae', '#fff', blueGrey[500], lightBlue[300]]
}).png()
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
        <div
          className="App-intro"
          style={{ backgroundImage: 'url(' + pattern + ')' }}>
          <div
            style={{
              flexDirection: 'column'
            }}>
            <IntroCard />
            <Feedback />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
