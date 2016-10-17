import React, { Component, propTypes } from 'react'
import Form from './Forms/Form'
import Demographics from './Forms/DemographicsForm'
import Partial from './Forms/FamilyForm'
import BackButton from './Buttons/BackButton'
import ForwardButton from './Buttons/ForwardButton'
import SubmitButton from './Buttons/Button.jsx'
import Link from "react-router/lib/Link"

const styleMUI = {
  forward: {
    float: 'right'
  }
}

const info = {}

class SignUp extends Component {
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
      info.married = c.married
      info.location = c.locale

      if(!this.state.formStateSet){
        this.formState()
        this.setState({formStateSet: true})
      }
      this.nextStep()
    })
  }

  handlePersonalInfo = (name, label, value) => {
    if (name === 'personal_info'){
      info[label] = value
      console.log(info)
    }
  }

  handleSpouseInfo = (name, label, value) => {
    if (name === 'spouse_info') {
      if(!info.hasOwnProperty('spouse')){
        info.spouse = {}
      }
      info.spouse[label] = value
      console.log(info)
    }

  }

  handleChildrenInfo = (name, label, value) => {
    const child = name.split('_')
    const idx = +child[1] - 1
    if(child[0] === "child"){
      if(!info.hasOwnProperty('children')){
        info.children = []
      }
      if(typeof info.children[idx] !== 'object'){
        info.children[idx] = {}
      }

      info.children[idx][label] = value;
      console.log(info);
    }
  }

  handleParentInfo = (name, label, value) => {
    if(name === 'mother_info' || name === 'father_info'){

      if(!info.hasOwnProperty('parent')){
        info.parents = [{},{}]
      }

      switch (name){
        case 'mother_info':
          info.parents[0][label] = value;
          break;
        case 'father_info':
          info.parents[1][label] = value;
          break;
        default:
          break;
      }
      console.log(info);
    }
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
    nextformState.push(<Partial name='personal_info' heading='PLEASE ENTER YOUR INFO:' onChange={this.handlePersonalInfo} />)

    // Add spouse form if married
    if (this.state.married) {
      nextformState.push(<Partial name='spouse_info' heading='PLEASE ENTER YOUR SPOUSE INFO:' onChange={this.handleSpouseInfo} />)
    }

    // Add form for each child
    if (this.state.numOfChildren) {
      const children = []
      for(let i = 0; i < this.state.numOfChildren; i++){
        const name = `child_${i+1}_info`;
        children.push(<Partial name={name} heading={`PLEASE ENTER YOUR ${name} INFO:`} onChange={this.handleChildrenInfo} />)
      }
      nextformState.push(children)
    }

    // Add parents form
    const parents = [<Partial key='1' name='mother_info' heading='PLEASE ENTER YOUR MOTHER INFO:' onChange={this.handleParentInfo} />,<Partial key='2' name='father_info' heading='PLEASE ENTER YOUR FATHER INFO:' onChange={this.handleParentInfo} />]

    nextformState.push(parents)

    this.setState({
      formState: nextformState
    })
  }

  render () {
    const { formState, step } = this.state
    const navButtons = (() => {
      const stateBtns = <div><BackButton onClick={this.previousStep} /><ForwardButton onClick={this.nextStep} /></div>
      const submitBtns = <SubmitButton label='Submit'/>

      if(this.state.step){
        if(this.state.step === this.state.formState.length-1){
          return submitBtns
        }
        return stateBtns
      }
    })()

    console.log(this.props);
    return (
      <Form  {...this.props} >
        {formState[step]}
        {navButtons}
      </Form>
    )
  }
}

// SignUp.childContextTypes = childContextTypes;

export default SignUp
