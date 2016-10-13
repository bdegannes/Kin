import React, { Component, PropTypes } from 'react'
import InputField from '../Field/InputField'
import DateSelector from '../DateSelector/Date'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import CSSModules from 'react-css-modules'
import styles from './FormStyles.scss'
import GSAP from 'react-gsap-enhancer'
import { TimelineMax } from 'gsap'

const propTypes ={
  heading: PropTypes.string
}

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
    this.state = {
      hasMaidenName: false,
      given_name: '',
      family_name: '',
      maiden_name: '',
      birth: '',
      gender: ''
    }
  }

  handleRadioSelect = (event, value) => {
    this.setState({gender: value})
    if(value === 'female') {
      this.setState({ hasMaidenName: true });
      this.move()
    }
  }

  handleChangeInput = (e) => {
    var inputName = e.name.replace(' ', '_').toLowerCase();
    if( this.state.hasOwnProperty(inputName) ){
      this.setState({[inputName]: e.value})
    }
  }

  handleChangeBirth = (date) => {
    this.setState({birth: date})
    console.log(this.state);
  }

  move () {
    this.setAnimation = this.addAnimation(animate)
  }

  render() {
    console.log(this.props);

    const { heading, ...other } = this.props

    return (
        <div styleName='familyform' >
          <h5> {heading} </h5>
          <InputField
            fieldStyle={styleMUI.fieldStyle}
            label='GIVEN NAME'
            type='text'
            lineStyle={styleMUI.focus}
            typeStyle={styleMUI.inputStyle}
            labelFocusStyle={styleMUI.focus}
            onChange={this.handleChangeInput}/>
          <InputField
            fieldStyle={styleMUI.fieldStyle}
            label='FAMILY NAME'
            type='text'
            lineStyle={styleMUI.focus}
            typeStyle={styleMUI.inputStyle}
            labelFocusStyle={styleMUI.focus}
            onChange={this.handleChangeInput}/>
          <label styleName='label'> BIRTH
            <DateSelector
              onChange={this.handleChangeBirth}/>
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
            labelFocusStyle={styleMUI.focus}
            onChange={this.handleChangeInput} />
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
    width: '50%',
  },
  maidenStyle: {
    width: '100%',
    height: '68px',
    margin: '0'
  }
}

FamilyForm.propTypes = propTypes;

export default CSSModules(FamilyForm, styles)
