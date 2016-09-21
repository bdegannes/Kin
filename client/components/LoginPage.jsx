import React, { Component } from 'react';
import Header from './Header/Header'
import InputField from './Field/InputField'
import About from './Info/Info'

import CSSModules from 'react-css-modules'
import styles from '../sass/LoginPage.scss'
import { Col } from 'react-bootstrap'

// When styling Material UI Components create a styles object for inline styles
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

class LoginPage extends Component{
  render () {
    return (
      <div>
        <Header />
        <Col xs={12} md={4} mdOffset={4} styleName='mainContainer'>
          <InputField
            fieldStyle={styleMUI.fieldStyle}
            label='ENTER YOU KIN ID'
            type='text'
            lineStyle={styleMUI.focus}
            typeStyle={styleMUI.inputStyle}
            labelFocusStyle={styleMUI.focus}
          />
          <About />
        </Col>
      </div>
    )
  }
}

export default CSSModules(LoginPage, styles)
