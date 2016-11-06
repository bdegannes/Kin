import React, { Component, PropTypes } from 'react'
import Partial from './FamilyForm'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ExpandLess from 'material-ui/svg-icons/navigation/arrow-drop-up'
import ExpandMore from 'material-ui/svg-icons/navigation/arrow-drop-down'

import CSSModules from 'react-css-modules'
import styles from './FormStyles.scss'

const propTypes = {
  toggleOne: PropTypes.func.isRequired,
  num: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired
}

class CollapseSection extends Component {
  toggle = () => {
    const { toggleOne, num } = this.props
    toggleOne(num)
  }

  setHeight = () => {
    const { open } = this.props
    let height = open ? '100%' : 0
    return height
  }

  handleChangeInput = (name, label, value) => {
    this.props.onChange(name, label, value)
  }

  expand = () => {
    const { open } = this.props
    return (
      <span styleName='expandArrow'>
        {open && (<MuiThemeProvider>
          <ExpandLess color='white' />
        </MuiThemeProvider>)}
        {!open && (<MuiThemeProvider>
          <ExpandMore color='white' />
        </MuiThemeProvider>)}
      </span>
    )
  }

  render () {
    const { num, name, heading } = this.props
    const title = name
    const style = { height: this.setHeight() }

    return (
      <div styleName='card'>
        <h5 onClick={this.toggle} >
          <span>{ title}</span>
          { this.expand() }
        </h5>
        <Partial
          key={num}
          name={name}
          heading={heading}
          style={style}
          onChange={this.handleChangeInput} />
      </div>
    )
  }
}

CollapseSection.PropTypes = propTypes

export default CSSModules(CollapseSection, styles)
