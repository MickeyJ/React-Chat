import React, { Component } from 'react'

import Navigation from './Navigation'

class Layout extends Component {
  render(){
    return(
      <div>
        <Navigation />
        {this.props.children}
      </div> 
    )
  }
}
export default Layout
