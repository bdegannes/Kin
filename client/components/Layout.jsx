import React from 'react'
import Header from './Header/Header'

const Layout = (props) => (
  <div className='container'>
    <Header />
    {props.children}
  </div>
)

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout
