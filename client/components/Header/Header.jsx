import React from 'react'
import Logo from '../Logo/Logo'
import { Navbar } from 'react-bootstrap'
import CSSModules from 'react-css-modules'
import styles from './HeaderStyles.scss'


const Header = () => (
  <Navbar styleName='nav' fluid>
    <Navbar.Header styleName='navHeader'>
      <Logo />
    </Navbar.Header>
  </Navbar>
)

export default CSSModules(Header, styles)