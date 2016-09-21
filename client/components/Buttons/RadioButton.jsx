import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const Radio = (props) => (
  <MuiThemeProvider>
    <RadioButtonGroup name={props.name} labelPosition={props.position} >
      <RadioButton
        value={props.value}
        label={props.label}
      />
    </RadioButtonGroup>
  </MuiThemeProvider>
)

export default Radio
