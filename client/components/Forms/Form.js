import React, { PropTypes } from 'react'

// TODO: Add validations for form elements

const propTypes = {
  children: PropTypes.node.isRequired
}

const Form = (props) => {
  return (
    <form>
      {props.children}
    </form>
  )
}

Form.propTypes = propTypes

export default Form
