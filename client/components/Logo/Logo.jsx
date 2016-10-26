import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import classNames from 'classnames/bind'
import styles from './LogoStyle.scss'

let names = classNames.bind(styles)

class KinLogo extends Component {
  render () {
    let logo = names({
      logoSm: this.props.location.pathname !== '/',
      logoLg: this.props.location.pathname === '/'
    })
    return (
      <div className={logo} >
        <svg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 334.65 197.04'>
          <title>Kin</title>
          <path d='M36.75,12.56V92.31l81.09-79.74h27.55L78,77.08l70.11,95.42H121.2L63.41,91.64,36.75,116.5v56H15.47V12.56H36.75Z' transform='translate(-15.47 24.54)' />
          <path d='M187.05,12.56V172.5H165.77V12.56h21.28Z' transform='translate(-15.47 24.54)' />
          <path d='M245.29,12.56l84.22,129.7H330V12.56h20.16V172.5H326.83L243.28,44.15h-0.45V172.5H222.67V12.56h22.62Z' transform='translate(-15.47 24.54)' /><text x='-15.47' y='24.54' />
        </svg>
      </div>
    )
  }
}

export default CSSModules(KinLogo, styles)
