import React, { Component } from 'react'
import InfoIcon from '../Icons/InfoIcon'

import CSSModules from 'react-css-modules'
import styles from './InfoStyle.scss'
import { Motion, spring } from 'react-motion'

const styleMUI = {
  focus: {
    color: '#68EFAD',
  }
}

const animate = (x) => {
  return {
    WebkitTransform: `translate3d(${x}px, 0, 0)`,
    transform: `translate3d(${x}px, 0, 0)`,
  }
}
{/* <InfoIcon
  hover={styleMUI.focus.color}
  onClick={this.handleClick}
  style={animate(x)}
/> */}

class Information extends Component {
  constructor(props){
    super(props)

    this.state = { infoBlockOpen: false }
  }

  handleClick = (event) => {
    // handle opening and closing of info box
    event.preventDefault()
    this.setState({ infoBlockOpen: !this.state.infoBlockOpen })
  }

  render() {
    return (
      <div>
        <div styleName='infoBlock'>
          <Motion
            style={{x: spring(this.state.infoBlockOpen ? -155 : 0, {stiffness: 145, damping: 23 })}} >
            {({x}) =>
              <InfoIcon
                hover={styleMUI.focus.color}
                onClick={this.handleClick}
                animate={animate(x)} />
            }
          </Motion>
            <div className={styles.info}>
              <p className={styles.infoText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices ante fringilla
                tortor laoreet, vel tincidunt arcu facilisis. Suspendisse vel nulla fermentum, imperdiet mi mattis, lacinia tortor.
              </p>
            </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(Information, styles)
