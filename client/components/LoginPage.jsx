import React, { Component } from 'react'
import InputField from './Field/InputField'
import About from './Info/Info'
import Button from './Buttons/Button'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from '../sass/LoginPage.scss'

// When styling Material UI Components create a styles object for inline styles
const styleMUI = {
  focus: {
    borderColor: '#68EFAD',
    color: '#68EFAD'
  },
  fieldStyle: {
    width: '100%',
    margin: '30px 0'
  },
  inputStyle: {
    color: 'white'
  },
  button: {
    display: 'inline-block',
    border: '1px solid #68EFAD'
  }
}

class LoginPage extends Component {
  render () {
    return (
      <div>
        <InputField
          fieldStyle={styleMUI.fieldStyle}
          label='ENTER YOU KIN ID'
          type='text'
          lineStyle={styleMUI.focus}
          typeStyle={styleMUI.inputStyle}
          labelFocusStyle={styleMUI.focus}
          inputStyle={styleMUI.inputStyle}
        />
        <div styleName='button'>
          <Link to='/personal'>
            <Button
              label='ENTER'
              backgroundColor='#512DA8'
              labelColor='white'
              style={styleMUI.button}
            />
          </Link>
        </div>
        <About />
      </div>
    )
  }
}

export default CSSModules(LoginPage, styles)
