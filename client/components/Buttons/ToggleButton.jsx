import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Toggle from 'material-ui/Toggle';

const ToggleSwitch = (props) => (
  <div>
    <p>{props.gender}</p>
    <MuiThemeProvider>
      <Toggle
        label={props.label}
        labelPosition={props.position}/>
    </MuiThemeProvider>
  </div>
    )

export default ToggleSwitch
