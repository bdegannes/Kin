import React, { Component} from 'react'
import Header from './Header/Header'
import CSSModules from 'react-css-modules'
import styles from '../sass/base.scss'

const App = (props) => (
  <div styleName='container'>
    <Header {...props} styles={null}/>
    {props.children}
  </div>
)

const { element } = React.PropTypes

App.propTypes = {
  children: element.isRequired
}

export default CSSModules(App, styles)
