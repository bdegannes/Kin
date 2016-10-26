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
  fieldStyle: PropTypes.object
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
      error_text: ''
    }
  }

  handleChange = (event, value) => {
    this.props.onChange(event.target)
  }

  isDirty = () => {
    this.setState({dirty: true}, function () {
      if (this.state.dirty && this.state.value === '') {
        this.setState({error_text: 'This field cannot be left empty!'})
      } else {
        this.setState({error_text: ''})
      }
    })
  }

  render () {
    const { type, hint } = this.props
    return (
      <div styleName='inputField'>
        <MuiThemeProvider>
          <TextField
            type={type}
            hintText={hint}
            name={this.props.label}
            onChange={this.handleChange}
            style={this.props.fieldStyle}
            inputStyle={this.props.typeStyle}
            floatingLabelText={this.props.label}
            floatingLabelStyle={styleMUI.labelStyle}
            underlineFocusStyle={this.props.lineStyle}
            floatingLabelFocusStyle={this.props.labelFocusStyle}
            onBlur={this.isDirty}
            errorText={this.state.error_text}
            errorStyle={styleMUI.error} />
        </MuiThemeProvider>
      </div>
    )
  }
}

InputField.propTypes = propTypes

export default CSSModules(InputField, styles)
