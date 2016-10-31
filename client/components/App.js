import React, { PropTypes } from 'react'
import Header from './Header/Header'

import { Col } from 'react-bootstrap'
import CSSModules from 'react-css-modules'
import styles from '../sass/base.scss'

const propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  routeParams: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
  styles: PropTypes.object
}

const App = (props) => (
  <div styleName='container'>
    <Header {...props} styles={null} />
    <Col xs={12} md={4} mdOffset={4} styleName='mainContainer'>
      {props.children}
    </Col>
  </div>
)

App.propTypes = propTypes

export default CSSModules(App, styles)
