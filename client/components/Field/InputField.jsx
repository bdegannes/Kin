import React, { Component, PropTypes } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'

import CSSModules from 'react-css-modules'
import styles from './Input.scss'

const propTypes = {
  value: PropTypes.string,
  hint: PropTypes.string,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  lineStyle: PropTypes.object,
  labelFocusStyle: PropTypes.object,
  typeStyle: PropTypes.object,
  fieldStyle: PropTypes.object,
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

  handleChange = (event, value) => {
    this.props.onChange(event.target)
  }

  isDirty = () => {
    const { dirty } = this.state
    const { value } = this.props
    this.setState({dirty: true}, function () {
      if (dirty && value === '') {
        this.setState({errorText: 'This field cannot be left empty!'})
      } else {
        this.setState({errorText: ''})
      }
    })
  }

  render () {
    const { type, hint, lineStyle, labelFocusStyle, label, typeStyle, fieldStyle } = this.props
    const { errorText } = this.state
    return (
      <div styleName='inputField'>
        <MuiThemeProvider>
          <TextField
            type={type}
            hintText={hint}
            name={label}
            onChange={this.handleChange}
            style={fieldStyle}
            inputStyle={typeStyle}
            floatingLabelText={label}
            floatingLabelStyle={styleMUI.labelStyle}
            underlineFocusStyle={lineStyle}
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
