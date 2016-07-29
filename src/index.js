import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './sass/main.scss'

import routes from './routes'

import {host} from './helpers/constants'

io.connect(host)

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>
  , document.querySelector('#app')
)
