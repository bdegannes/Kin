import React, { Component } from 'react';
import Header from './Header/Header'
import InputField from './Field/InputField'
import About from './Info/Info'
import Button from "./Buttons/Button"
import { Link } from "react-router"
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
    width: '100%',
    margin: '30px 0'
  },
  inputStyle: {
    color: 'white'
  },
  button:{
    display: 'inline-block',
    border: '1px solid #68EFAD'
  }
}

class LoginPage extends Component{
  render () {
    return (
      <div>
        <Col xs={12} md={4} mdOffset={4} styleName='mainContainer'>
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
            <Link to="/personal">
              <Button
                label='ENTER'
                backgroundColor='#512DA8'
                labelColor='white'
                style={styleMUI.button}
              >
              </Button>
            </Link>
          </div>
          <About />
        </Col>
      </div>
    )
  }
}

export default CSSModules(LoginPage, styles)
