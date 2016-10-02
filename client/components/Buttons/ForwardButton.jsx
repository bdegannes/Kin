import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigationForward from 'material-ui/svg-icons/navigation/arrow-forward';

class Forward extends Component{
  handleClick = () => {
    this.props.onClick()
  }

  render () {
    return (
      <MuiThemeProvider>
        <FloatingActionButton
          style={this.props.style}
          mini={true}
          onClick={this.handleClick} >
          <NavigationForward />
        </FloatingActionButton>
      </MuiThemeProvider>
    )
  }
}

export default Forward
