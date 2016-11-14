import React, { Component } from 'react'
import { connect } from 'react-redux'

import Location from '../Selectors/States'
import Toggle from '../Buttons/ToggleButton'
import InputField from '../Field/InputField'
import ForwardButton from '../Buttons/ForwardButton'

import CSSModules from 'react-css-modules'
import styles from './FormStyles.scss'

@CSSModules(styles)
class Demographics extends Component {
  handleLocation = (location) => {
    this.props.onChange({ location })
  }

  handleToggle = (bool) => {
    this.props.onChange({ married: bool })
  }

  handleInput = (target) => {
    this.props.onChange({ children: target.value })
  }

  render () {
    const { personal } = this.props
    return (
      <div styleName='demographics'>
        <h5>PLEASE MAKE A SELECTION:</h5>
        <Location
          label='LOCATION:'
          underline={{ border: 'none' }}
          onChange={this.handleLocation} />
        <Toggle
          label='MARRIED:'
          position='left'
          toggleStyle={styleMUI.toggle}
          onChange={this.handleToggle} />
        <InputField
          label='CHILDREN'
          type='number'
          hint='NUMBER'
          value={personal.children || ''}
          fieldStyle={styleMUI.fieldStyle}
          typeStyle={styleMUI.inputStyle}
          onChange={this.handleInput} />
        <ForwardButton
          style={styleMUI.forward}
          onClick={this.props.onClick} />
      </div>
    )
  }
}

const styleMUI = {
  forward: {
    float: 'right',
    marginTop: '15px'
  },
  fieldStyle: {
    width: '100%',
    height: '68px',
    margin: '0'
  },
  inputStyle: {
    color: 'white',
    fill: 'white'
  },
  label: {
    color: 'white'
  },
  toggle: {
    margin: '25px 0 0'
  }
}

const mapStateToProps = ({ memberFormData }) => memberFormData
export default connect(mapStateToProps, null)(Demographics)
