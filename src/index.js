import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { blue } from 'material-ui/colors'
import 'typeface-roboto'
import './index.css'
import App from './app/App'

import registerServiceWorker from './registerServiceWorker'
const theme = createMuiTheme({
  palette: {
    primary: blue
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
