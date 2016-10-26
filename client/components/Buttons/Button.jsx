import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

const Button = (props) => (
  <MuiThemeProvider>
    <RaisedButton
      label={props.label}
      backgroundColor={props.backgroundColor}
      href={props.href}
      labelColor={props.labelColor}
      style={props.style}
    />
  </MuiThemeProvider>
)

export default Button
