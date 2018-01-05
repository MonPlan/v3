import React, { Component } from 'react'
import './App.css'
import { Card, Typography, Grid, Divider } from 'material-ui'
import Button from 'material-ui/Button/Button'
import CardContent from 'material-ui/Card/CardContent'
import IntroCard from './components/containers/IntroContainer'
import Footer from './components/containers/Footer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="./images/logo_white.svg" width={200} />
        </header>
        <div className="App-intro">
          <div className="Card-container">
            <IntroCard />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
