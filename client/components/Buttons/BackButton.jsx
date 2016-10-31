import React, { Component, PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back'

const propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired
}

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

Forward.propTypes = propTypes

export default Forward
