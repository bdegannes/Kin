import React, { Component } from 'react'
import { Link } from 'react-router'

import Form from '../components/Forms/Form'
import InputField from '../components/Field/InputField'
import About from '../components/Info/Info'
import Button from '../components/Buttons/Button'

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
  constructor (props) {
    super(props)
    this.state = { kinId: '' }
  }

  handleChange = (target) => {
    this.setState({ kinId: target.value })
  }

  handleSubmit = () => {
    this.props.validate(this.state)
  }

  render () {
    const { kinId } = this.state
    return (
      <div>
        <Form>
          <InputField
            fieldStyle={styleMUI.fieldStyle}
            label='ENTER YOU KIN ID'
            type='text'
            value={kinId}
            lineStyle={styleMUI.focus}
            typeStyle={styleMUI.inputStyle}
            labelFocusStyle={styleMUI.focus}
            inputStyle={styleMUI.inputStyle}
            onChange={this.handleChange}
          />
        </Form>
        <div styleName='button'>
          <Link to='/personal'>
            <Button
              label='ENTER'
              backgroundColor='#512DA8'
              labelColor='white'
              style={styleMUI.button}
              onSubmit={this.handleSubmit}
            />
          </Link>
        </div>
        <About />
      </div>
    )
  }
}

export default CSSModules(LoginPage, styles)
