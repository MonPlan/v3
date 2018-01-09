import React, { Component } from 'react'

import { Route, Router, Switch } from 'react-router-dom'

import history from './history'
import trianglify from 'trianglify'
import { blueGrey, lightBlue } from 'material-ui/colors'
import './App.css'
import Footer from '../components/containers/Footer'

import Status from '../components/StatusPopover'
import { HomePage, UnknownPage, TeamPage } from '../pages'

var pattern = trianglify({
  width: 1500,
  height: 1500,
  x_colors: ['#006cab', '#006dae', '#fff', blueGrey[500], lightBlue[300]]
}).png()
class App extends Component {
  render() {
    return (
      <Router history={history}>
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
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/team" component={TeamPage} />
              <Route component={UnknownPage} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
