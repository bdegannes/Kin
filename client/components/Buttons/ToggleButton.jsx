import React, { Component, PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Toggle from 'material-ui/Toggle'

const propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  labelPosition: PropTypes.string,
  style: PropTypes.object
}

class ToggleSwitch extends Component {
  handleChange = (event, state) => {
    this.props.onChange(state)
  }

  render () {
    return (
      <div>
        <p>{this.props.gender}</p>
        <MuiThemeProvider>
          <Toggle
            label={this.props.label}
            labelPosition={this.props.position}
            labelStyle={styleMUI.label}
            style={this.props.toggleStyle}
            onToggle={this.handleChange} />
        </MuiThemeProvider>
      </div>
    )
  }
}

const styleMUI = {
  label: {
    color: 'white',
    fontSize: '16px'
  }
}

ToggleSwitch.propTypes = propTypes

export default ToggleSwitch
