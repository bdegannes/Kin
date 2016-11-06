import React, { PropTypes } from 'react'
import Logo from '../Logo/Logo'
import { Navbar } from 'react-bootstrap'

import CSSModules from 'react-css-modules'
import styles from './HeaderStyles.scss'

const propTypes = {
  children: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  routeParams: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
  styles: PropTypes.object
}

const Header = (props) => (
  <Navbar styleName='nav' fluid>
    <Navbar.Header styleName='navHeader'>
      <Logo {...props} />
    </Navbar.Header>
  </Navbar>
)

Header.propTypes = propTypes

export default CSSModules(Header, styles)
