import React, { Component, PropTypes } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'

import CSSModules from 'react-css-modules'
import styles from './Input.scss'

const propTypes = {
  hint: PropTypes.string,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  lineStyle: PropTypes.object,
  labelFocusStyle: PropTypes.object,
  typeStyle: PropTypes.object,
  fieldStyle: PropTypes.object,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

const styleMUI = {
  labelStyle: {
    color: 'white'
  },
  error: {
    textAlign: 'end'
  }
}

class InputField extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dirty: false,
      errorText: ''
    }
  }

  handleChange = (event) => {
    this.props.onChange(event.target)
  }

  isDirty = (event) => {
    const { dirty } = this.state
    const { defaultValue } = this.props
    this.setState({dirty: true}, function () {
      if (dirty && defaultValue === '') {
        this.setState({errorText: 'This field cannot be left empty!'})
      } else {
        this.setState({errorText: ''})
      }
    })
  }

  render () {
    const { value, type, hint, lineStyle, labelFocusStyle, label, typeStyle, fieldStyle } = this.props
    const { errorText } = this.state
    return (
      <div styleName='inputField'>
        <MuiThemeProvider>
          <TextField
            type={type}
            hintText={hint}
            name={label}
            defaultValue={value}
            style={fieldStyle}
            inputStyle={typeStyle}
            floatingLabelText={label}
            onChange={this.handleChange}
            underlineFocusStyle={lineStyle}
            floatingLabelStyle={styleMUI.labelStyle}
            floatingLabelFocusStyle={labelFocusStyle}
            onBlur={this.isDirty}
            errorText={errorText}
            errorStyle={styleMUI.error} />
        </MuiThemeProvider>
      </div>
    )
  }
}

InputField.propTypes = propTypes

export default CSSModules(InputField, styles)
