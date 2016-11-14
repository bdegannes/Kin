import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Toggle from 'material-ui/Toggle'

const propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  labelPosition: PropTypes.string,
  style: PropTypes.object
}

class ToggleSwitch extends Component {
  handleChange = (event, bool) => {
    this.props.onChange(bool)
  }

  render () {
    const { personal, label, position, toggleStyle } = this.props
    return (
      <div>
        <MuiThemeProvider>
          <Toggle
            defaultToggled={personal.married || false}
            label={label}
            labelPosition={position}
            labelStyle={styleMUI.label}
            style={toggleStyle}
            onToggle={this.handleChange} />
        </MuiThemeProvider>
      </div>
    )
  }
}

const styleMUI = {
  label: {
    color: 'white',
    fontSize: '16px'
  }
}

ToggleSwitch.propTypes = propTypes

const mapStateToProps = ({ memberFormData }) => memberFormData
export default connect(mapStateToProps, null)(ToggleSwitch)
