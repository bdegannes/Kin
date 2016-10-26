import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back'

class Forward extends Component {
  handleClick =() => {
    this.props.onClick()
  }

  render () {
    return (
      <MuiThemeProvider>
        <FloatingActionButton
          style={this.props.style}
          mini
          onClick={this.handleClick} >
          <NavigationBack />
        </FloatingActionButton>
      </MuiThemeProvider>
    )
  }
}

export default Forward
