/* global Expo */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import InputField from '../Field/InputField'
import DateSelector from '../DateSelector/Date'
import * as _u from '../../utils'

import CSSModules from 'react-css-modules'
import styles from './FormStyles.scss'
import GSAP from 'react-gsap-enhancer'
import { TimelineMax } from 'gsap'

const propTypes = {
  heading: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string
}

const animate = ({ target }) => {
  const input = target.findInChildren({ name: 'maiden' })
  return new TimelineMax()
    .to(input, 0.8, { height: '70px', ease: Expo.easeInOut })
}

@GSAP()
@CSSModules(styles)
class FamilyForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hasMaidenName: false
    }
  }

  handleRadioSelect = (event, value) => {
    this.props.onChange(this.props.name, event.target.name, value)
    if (value === 'female') {
      this.setState({ hasMaidenName: true }, function () {
        this.addMaidenName()
      })
    } else {
      this.removeMaidenName()
    }
  }

  handleChangeInput = (event) => {
    var inputName = event.name.replace(' ', '_').toLowerCase()
    this.props.onChange(this.props.name, inputName, event.value)
  }

  handleChangeBirth = (date) => {
    this.props.onChange(this.props.name, 'birth', date)
  }

  addMaidenName = () => {
    if (!this.openAnim) {
      this.openAnim = this.addAnimation(animate)
    } else {
      this.openAnim.play()
    }
  }

  removeMaidenName = () => {
    if (this.openAnim) {
      this.openAnim.reverse()
    }
  }

  render () {
    const { name, heading, style } = this.props

    return (
      <div styleName='familyform' style={style}>
        <h5> {heading} </h5>
        <InputField
          label='GIVEN NAME'
          type='text'
          value={_u.formValueProperties(this.props).given_name || ''}
          fieldStyle={styleMUI.fieldStyle}
          lineStyle={styleMUI.focus}
          typeStyle={styleMUI.inputStyle}
          labelFocusStyle={styleMUI.focus}
          onChange={this.handleChangeInput} />
        <InputField
          label='FAMILY NAME'
          type='text'
          value={_u.formValueProperties(this.props).family_name || ''}
          fieldStyle={styleMUI.fieldStyle}
          lineStyle={styleMUI.focus}
          typeStyle={styleMUI.inputStyle}
          labelFocusStyle={styleMUI.focus}
          onChange={this.handleChangeInput} />
        <label styleName='label'> BIRTH
          <DateSelector
            name={name}
            onChange={this.handleChangeBirth} />
        </label>
        <MuiThemeProvider>
          <RadioButtonGroup
            name='gender'
            labelPosition='right'
            defaultSelected={_u.formValueProperties(this.props).gender || _u.noop}
            style={styleMUI.radioGroup}
            onChange={this.handleRadioSelect} >
            <RadioButton
              value='male'
              label='MALE'
              labelStyle={styleMUI.inputStyle}
              iconStyle={styleMUI.inputStyle}
              style={styleMUI.radio} />
            <RadioButton
              value='female'
              label='FEMALE'
              labelStyle={styleMUI.inputStyle}
              iconStyle={styleMUI.inputStyle}
              style={styleMUI.radio} />
          </RadioButtonGroup>
        </MuiThemeProvider>
        <div styleName='maiden' name='maiden'>
          <InputField
            label='MAIDEN NAME'
            type='text'
            value={_u.formValueProperties(this.props).maiden_name || ''}
            fieldStyle={styleMUI.maidenStyle}
            lineStyle={styleMUI.focus}
            typeStyle={styleMUI.inputStyle}
            labelFocusStyle={styleMUI.focus}
            onChange={this.handleChangeInput} />
        </div>
      </div>
    )
  }
}

const styleMUI = {
  focus: {
    borderColor: '#68EFAD',
    color: '#68EFAD'
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
  radioGroup: {
    width: '70%',
    margin: '0 auto'
  },
  radio: {
    display: 'inline-block',
    width: '50%'
  },
  maidenStyle: {
    width: '100%',
    margin: '0'
  }
}

FamilyForm.propTypes = propTypes

const mapStateToProps = ({ memberFormData }) => memberFormData
export default connect(mapStateToProps, null)(FamilyForm)
