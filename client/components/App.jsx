import React, { Component} from 'react'
import Header from './Header/Header'

import { Col } from 'react-bootstrap'
import CSSModules from 'react-css-modules'
import styles from '../sass/base.scss'

const App = (props) => (
  <div styleName='container'>
    <Header {...props} styles={null}/>
    <Col xs={12} md={4} mdOffset={4} styleName='mainContainer'>
      {props.children}
    </Col>
  </div>
)

const { element } = React.PropTypes

App.propTypes = {
  children: element.isRequired
}

export default CSSModules(App, styles)
