import React, { Component } from 'react'
import { Link } from "react-router"
import CSSModules from 'react-css-modules'
import { Col } from 'react-bootstrap'
import Location from '../Selectors/States'
import Toggle from '../Buttons/ToggleButton'
import InputField from '../Field/InputField'
import ForwardButton from '../Buttons/ForwardButton'
import styles from './FormStyles.scss'

class Demographics extends Component {
  constructor (props) {
    super(props)
    this.state = {
      locale: '',
      married: false,
      children: 0
    }
  }

  handleLocation = (val) => {
    this.setState({ locale: val })
  }

  handleToggle = (bool) => {
    this.setState({ married: bool })
  }

  handleInput = (target) => {
    this.setState({ children: target.value })
  }

  handleClick = () => {
    this.props.onChange(this.state)
  }

  render () {
    return (
        <div styleName='demographics'>
          <h5>PLEASE MAKE A SELECTION:</h5>
          <Location
            label='LOCATION:'
            underline={{border: 'none'}}
            onChange={this.handleLocation}/>
          <Toggle
            label='MARRIED:'
            position='left'
            toggleStyle={styleMUI.toggle}
            onChange={this.handleToggle} />
          <InputField
            label='CHILDREN'
            type='number'
            hint='NUMBER'
            fieldStyle={styleMUI.fieldStyle}
            typeStyle={styleMUI.inputStyle}
            onChange={this.handleInput} />
          <ForwardButton
            style={styleMUI.forward}
            onClick={this.handleClick} />
        </div>
    )
  }
}

const styleMUI = {
  forward: {
    float: 'right'
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

export default CSSModules(Demographics, styles)
