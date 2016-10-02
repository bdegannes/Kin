import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Toggle from 'material-ui/Toggle';

class ToggleSwitch extends Component {
  constructor (props) {
    super(props)
  }
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
export default ToggleSwitch
