import React, { Component } from 'react'
import Location from '../Selectors/States'
import Toggle from '../Buttons/ToggleButton'
import InputField from '../Field/InputField'
import ForwardButton from '../Buttons/ForwardButton'
import CSSModules from 'react-css-modules'
import { Col } from 'react-bootstrap'
import styles from './FormStyles.scss'

class Demographics extends Component {
  render () {
    return (
      <Col>
        <h1>PLEASE MAKE A SELECTION</h1>
        <Location />
        <Toggle />
        <InputField />
        <ForwardButton />
      </Col>
    )
  }
}

export default CSSModules(Demographics, styles)
