import React, { PropTypes } from 'react'

// TODO: Add validations for form elements

const propTypes = {
  value: PropTypes.object
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
