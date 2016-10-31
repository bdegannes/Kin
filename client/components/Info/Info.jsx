/* global Sine, Power0 */

import React, { Component } from 'react'
import InfoIcon from '../Icons/InfoIcon'

import CSSModules from 'react-css-modules'
import styles from './InfoStyle.scss'
import GSAP from 'react-gsap-enhancer'
import { TimelineMax } from 'gsap'

const styleMUI = {
  focus: {
    color: '#68EFAD'
  }
}

const animate = ({ target }) => {
  const icon = target.findInChildren({name: 'info'})
  const block = target.findInChildren({styleName: 'infoTextBlock'})

  let tl = new TimelineMax()
  tl.to(icon, 0.4, { y: '-80px', scale: 0.6, ease: Sine.easeOut })
    .to(block, 0.4, { height: '120px', borderBottom: '2px solid #68EFAD', ease: Power0.easeNone }, '-=0.2')
  return tl
}

@GSAP()
class Information extends Component {
  constructor (props) {
    super(props)
    this.state = { infoBlockOpen: false }
  }

  handleClick = (event) => {
    event.preventDefault()
    this.setState({ infoBlockOpen: !this.state.infoBlockOpen })
    this.move()
  }

  move = () => {
    if (!this.state.infoBlockOpen) {
      this.switchAnim = this.addAnimation(animate)
    } else {
      this.switchAnim.reverse()
    }
  }

  render () {
    return (
      <div styleName='infoBlock'>
        <InfoIcon
          name='info'
          hover={styleMUI.focus.color}
          onClick={this.handleClick} />
        <div styleName='infoTextBlock'>
          <p styleName='infoText'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices ante fringilla
            tortor laoreet, vel tincidunt arcu facilisis. Suspendisse vel nulla fermentum, imperdiet mi mattis, lacinia tortor.
          </p>
        </div>
      </div>
    )
  }
}

export default CSSModules(Information, styles)
