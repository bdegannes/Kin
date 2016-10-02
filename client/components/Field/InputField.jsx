import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CSSModules from 'react-css-modules'
import styles from './Input.scss'

const styleMUI = {
  labelStyle: {
    color: 'white'
  },
  error: {
    textAlign: 'end'
  }
}

class InputField extends Component {
  constructor ( props ) {
    super(props)
    this.state = {
      value: '',
      dirty: false,
      error_text: ''
    }
  }

  handleChange = ( event, value) => {
    this.setState({ value }, function () {
      this.props.onChange(this.state.value)
    })
  }

  isDirty = () => {
    this.setState({dirty: true}, function () {
      if(this.state.dirty && this.state.value === ''){
        this.setState({error_text: 'This field cannot be left empty!'})
      } else {
        this.setState({error_text: ''})
      }
    })
  }

  render() {
    return (
      <div styleName='inputField'>
        <MuiThemeProvider>
          <TextField
            floatingLabelText={this.props.label}
            type={this.props.type}
            hintText={this.props.hint}
            onChange={this.handleChange}
            floatingLabelStyle={styleMUI.labelStyle}
            underlineFocusStyle={this.props.lineStyle}
            floatingLabelFocusStyle={this.props.labelFocusStyle}
            inputStyle={this.props.typeStyle}
            style={this.props.fieldStyle}
            onBlur={this.isDirty}
            errorText={this.state.error_text}
            errorStyle={styleMUI.error} />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default CSSModules(InputField, styles)
