import React, { Component } from 'react'
import InputField from '../Field/InputField'
import DateSelector from '../DateSelector/Date'
import Toggle from '../Buttons/ToggleButton'
import ForwardButton from '../Buttons/ForwardButton'
import Button from '../Buttons/Button'
import { Col } from 'react-bootstrap'
import CSSModules from 'react-css-modules'
import styles from './FormStyles.scss'

const styleMUI = {
  focus: {
    borderColor: '#68EFAD',
    color: '#68EFAD'
  },
  fieldStyle: {
    width: '320px',
    margin: '30px 0'
  },
  inputStyle: {
    color: 'fff'
  }
}

class FamilyForm extends Component {
  render() {
    return (
      <Col styleName='familyform' xs={12} md={4} mdOffset={4}>
        <InputField
          fieldStyle={styleMUI.fieldStyle}
          label='GIVEN NAME'
          type='text'
          lineStyle={styleMUI.focus}
          typeStyle={styleMUI.inputStyle}
          labelFocusStyle={styleMUI.focus} />
        <InputField
          fieldStyle={styleMUI.fieldStyle}
          label='FAMILY NAME'
          type='text'
          lineStyle={styleMUI.focus}
          typeStyle={styleMUI.inputStyle}
          labelFocusStyle={styleMUI.focus}/>
        <label> BIRTH
          <DateSelector />
        </label>
        <Toggle />
        <InputField
          fieldStyle={styleMUI.fieldStyle}
          label='MAIDEN NAME'
          type='text'
          lineStyle={styleMUI.focus}
          typeStyle={styleMUI.inputStyle}
          labelFocusStyle={styleMUI.focus} />
        <ForwardButton />
      </Col>
    )
  }
}

export default CSSModules(FamilyForm, styles)
