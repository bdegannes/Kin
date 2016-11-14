import React, { Component, PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import NavigationForward from 'material-ui/svg-icons/navigation/arrow-forward'

const propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.object
}

class Forward extends Component {
  handleClick = () => {
    this.props.onClick()
  }

  render () {
    return (
      <MuiThemeProvider>
        <FloatingActionButton
          style={this.props.style}
          mini
          onClick={this.handleClick} >
          <NavigationForward />
        </FloatingActionButton>
      </MuiThemeProvider>
    )
  }
}

Forward.propTypes = propTypes

export default Forward
