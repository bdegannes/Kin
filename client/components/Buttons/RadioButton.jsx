import React, { PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

const propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string
}

const Radio = (props) => (
  <MuiThemeProvider>
    <RadioButtonGroup name={props.name} labelPosition={props.position} >
      <RadioButton
        value={props.value}
        label={props.label} />
    </RadioButtonGroup>
  </MuiThemeProvider>
)

Radio.propTypes = propTypes

export default Radio
