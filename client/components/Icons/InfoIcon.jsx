import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Info from 'material-ui/svg-icons/action/info-outline'
import CSSModules from 'react-css-modules'
import styles from './IconStyles.scss'

/*
props : hover=ColorString
*/

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
      <div key='info' styleName='iconInfo' style={this.props.animate}>
        <MuiThemeProvider>
          <Info
            style={iconStyles}
            hoverColor={this.props.hover}
            color='white'
            onClick={this.handleClick}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default CSSModules(InfoIcon, styles)
