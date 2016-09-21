import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  labelStyle: {
    color: 'white',
  },
  inputField: {
    textAlign: 'center',
  }
}

class InputField extends Component {
  constructor ( props ) {
    super(props)
    this.state = {
      value: '',
    }
  }

  handleChange = ( event, value) => {
    this.setState({ value })
    console.log(this.state);
  }

  render() {
    return (
      <div style={styles.inputField}>
        <MuiThemeProvider>
          <TextField
            floatingLabelText={this.props.label}
            type={this.props.type}
            onChange={this.handleChange}
            floatingLabelStyle={styles.labelStyle}
            underlineFocusStyle={this.props.lineStyle}
            floatingLabelFocusStyle={this.props.labelFocusStyle}
            inputStyle={this.props.typeStyle}
            style={this.props.fieldStyle}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default InputField
