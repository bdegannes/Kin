import React, { Component } from 'react'
import InputField from '../Field/InputField'
import DateSelector from '../DateSelector/Date'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ForwardButton from '../Buttons/ForwardButton'
import Button from '../Buttons/Button'
import { Link } from "react-router"
import { Col } from 'react-bootstrap'
import CSSModules from 'react-css-modules'
import styles from './FormStyles.scss'
import GSAP from 'react-gsap-enhancer'
import { TimelineMax } from 'gsap'

const animate = ({ target }) => {
  const maiden = target.findAll({ name: 'maiden' })

  let tl = new TimelineMax();
      tl.to(maiden, 0.4, { height: '68px', borderBottom: '2px solid #68EFAD', })

  return tl
}

@GSAP()
class FamilyForm extends Component {
  constructor (props) {
    super(props)
    this.state = { hasMaidenName: false }
  }

  handleRadioSelect = (event, value) => {
    if(value === 'female') {
      this.setState({ hasMaidenName: true });
      this.move()
    }
  }

  move () {
    this.setAnimation = this.addAnimation(animate)
  }

  render() {
    return (
      <Col xs={12} md={4} mdOffset={4}>
        <div styleName='familyform' >
          <h5> PLEASE ENTER YOUR: </h5>
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
          <label styleName='label'> BIRTH
            <DateSelector />
          </label>
          <MuiThemeProvider>
            <RadioButtonGroup
              style={styleMUI.radioGroup}
              name='gender'
              labelPosition='right'
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
                style={styleMUI.radio}/>
            </RadioButtonGroup>
          </MuiThemeProvider>
          <InputField
            name='maiden'
            fieldStyle={styleMUI.maidenStyle}
            label='MAIDEN NAME'
            type='text'
            lineStyle={styleMUI.focus}
            typeStyle={styleMUI.inputStyle}
            labelFocusStyle={styleMUI.focus} />
          <Link to='/personal/demographics'>
            <ForwardButton style={styleMUI.forward} />
          </Link>
          {this.props.children}
        </div>
      </Col>
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
    width: '50%',
  },
  forward: {
    float: 'right'
  },
  maidenStyle: {
    width: '100%',
    height: '68px',
    margin: '0'
  }
}

export default CSSModules(FamilyForm, styles)
