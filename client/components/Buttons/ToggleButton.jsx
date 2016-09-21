import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Toggle from 'material-ui/Toggle';

const ToggleSwitch = (props) => (
  <MuiThemeProvider>
    <Toggle
      label={props.label}
      labelPosition={props.position}/>
  </MuiThemeProvider>
)

export default ToggleSwitch
