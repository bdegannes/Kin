import React, { Component } from 'react'
import Form from './Forms/Form'
import Demographics from './Forms/DemographicsForm'
import Partial from './Forms/FamilyForm'
import ForwardButton from './Buttons/ForwardButton'
import Link from "react-router/lib/Link"

const styleMUI = {
  forward: {
    float: 'right'
  }
}

class Personal extends Component {
  constructor () {
    super()
    this.state = {
      given_name: '',
      family_name: '',
      maiden_name: '',
      location: '',
      married: '',
      birth: '',
      gender: '',
      numOfChildren: 0,
      spouse: {},
      children: [],
      parents: [],
      formStateSet: false,
      formState: [],
      step: 0
    }
  }
  componentWillMount () {
    this.setState({
      formState: [<Demographics onChange={this.handleDemoClickNext}/>]
    })
  }

  handleDemoClickNext = (c) => {
    this.setState({
      location: c.locale,
      married: c.married,
      numOfChildren: +c.children
    }, function () {
      if(!this.state.formStateSet){
        this.formState()
        this.setState({formStateSet: true})
      }
      this.nextStep()
    })
  }

  nextStep = () => {
    let next = this.state.step
    if(this.state.step !== this.state.formState.length){
      next += 1
    }
    this.setState({step: next})
  }

  previousStep = () => {
    let prev = this.state.step
    if(this.state.step > 0) {
      prev -= 1
    }
    this.setState({step: prev})
  }

  formState = () => {
    let nextformState = this.state.formState
    // personal info form partial
    nextformState.push(<Partial name='personal_info' heading='PLEASE ENTER YOUR INFO:'/>)

    // Add spouse form if married
    if (this.state.married) {
      nextformState.push(<Partial name='spouse_info' heading='PLEASE ENTER YOUR SPOUSE INFO:'/>)
    }

    // Add form for each child
    if (this.state.numOfChildren) {
      const children = []
      for(let i = 0; i < this.state.numOfChildren; i++){
        const name = `child${i+1}_info`;
        children.push(<Partial name={name} heading={`PLEASE ENTER YOUR ${name} INFO:`}/>)
      }
      nextformState.push(children)
    }

    // Add parents form
    const parents = [<Partial name='mother_info' heading='PLEASE ENTER YOUR MOTHER INFO:'/>,<Partial name='father_info' heading='PLEASE ENTER YOUR FATHER INFO:'/>]

    nextformState.push(parents)

    this.setState({
      formState: nextformState
    })
  }

  render () {
    const { formState, step } = this.state
    return (
      <Form  {...this.props}>
        {formState[step]}
      </Form>
    )
  }
}

export default Personal
