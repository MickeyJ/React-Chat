import React from 'react'
import {Route, IndexRoute, Redirect} from 'react-router'

import Layout from './layout'
import Landing from './pages/Landing'

export default (
  <Route path="/" component={Layout} >
    <IndexRoute component={Landing} />
    <Redirect from="*" to="/" />
  </Route>
)
