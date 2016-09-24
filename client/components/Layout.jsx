import React, { Component} from 'react'
import Header from './Header/Header'
import CSSModules from 'react-css-modules'
// import styles from './LayoutStyles.scss'

class Layout extends Component {
  render () {
    return (
      <div className='container'>
        <Header {...this.props}/>
        {this.props.children}
      </div>
    )
  }
}


const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

export default CSSModules(Layout)
