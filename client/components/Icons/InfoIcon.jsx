import React, { Component, PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Info from 'material-ui/svg-icons/action/info-outline'

import CSSModules from 'react-css-modules'
import styles from './IconStyles.scss'

const propTypes = {
  onClick: PropTypes.func.isRequired,
  hover: PropTypes.string,
  animate: PropTypes.func
}

const iconStyles = {
  height: 48,
  width: 48
}

class InfoIcon extends Component {
  handleClick = (event) => {
    this.props.onClick(event)
  }

  render () {
    return (
      <div key='info' styleName='iconInfo'>
        <MuiThemeProvider>
          <Info
            color='white'
            style={iconStyles}
            hoverColor={this.props.hover}
            onClick={this.handleClick} />
        </MuiThemeProvider>
      </div>
    )
  }
}

InfoIcon.propTypes = propTypes

export default CSSModules(InfoIcon, styles)
