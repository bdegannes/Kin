import React, { PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

const propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  labelColor: PropTypes.string,
  href: PropTypes.string,
  style: PropTypes.object,
  onSubmit: PropTypes.func.isRequired
}

const Button = (props) => (
  <MuiThemeProvider>
    <RaisedButton
      label={props.label}
      backgroundColor={props.backgroundColor}
      href={props.href}
      labelColor={props.labelColor}
      style={props.style}
      onClick={props.onSubmit}
    />
  </MuiThemeProvider>
)

Button.propTypes = propTypes

export default Button
