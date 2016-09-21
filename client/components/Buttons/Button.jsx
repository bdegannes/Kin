import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';

const Button = (props) => (
  <MuiThemeProvider>
    <RaisedButton label={props.label}/>
  </MuiThemeProvider>
)

export default Button
