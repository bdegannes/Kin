import React, { Component } from 'react'
import Form from './Forms/Form'
import Demographics from './Forms/DemographicsForm'
import Data from './Forms/FamilyForm'
import ForwardButton from './Buttons/ForwardButton'
import Link from "react-router/lib/Link"

const styleMUI = {
  forward: {
    float: 'right'
  }
}
 const formStates = [
   <Demographics/>,
   <Data name='personal_info' heading='PLEASE ENTER YOUR INFO:'/>,
   <Data name='spouse_info'/>,
   <Data name='child_info'/>,
   <Data name='parent_info'/>,
 ]

class Personal extends Component {

  handleClickNext = () => {

  }

  render () {
    console.log(this.props);
    return (
        <Form  {...this.props}>
          <Data name='personal_info' heading='PLEASE ENTER YOUR INFO:' />,
        </Form>
    )
  }
}

export default Personal
