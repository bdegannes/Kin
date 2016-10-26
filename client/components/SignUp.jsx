import React, { Component } from 'react'
import Form from './Forms/Form'
import Demographics from './Forms/DemographicsForm'
import Partial from './Forms/FamilyForm'
import BackButton from './Buttons/BackButton'
import ForwardButton from './Buttons/ForwardButton'
import SubmitButton from './Buttons/Button.jsx'

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
      numOfChildren: 0,
      formStateSet: false,
      formState: [],
      step: 0
    }
  }

  componentWillMount () {
    this.setState({
      formState: [<Demographics onChange={this.handleDemoClickNext} />]
    })
  }

  handleDemoClickNext = (content) => {
    this.setState({
      numOfChildren: +content.children
    }, function () {
      info.married = content.married
      info.location = content.locale

      if (!this.state.formStateSet) {
        this.formState()
        this.setState({ formStateSet: true })
      }
      this.nextStep()
    })
  }

  handlePersonalInfo = (name, label, value) => {
    if (name === 'personal_info') {
      info[label] = value
    }
  }

  handleSpouseInfo = (name, label, value) => {
    if (name === 'spouse_info') {
      if (!info.hasOwnProperty('spouse')) {
        info.spouse = {}
      }
      info.spouse[label] = value
    }
  }

  handleChildrenInfo = (name, label, value) => {
    const child = name.split('_')
    const idx = +child[1] - 1
    if (child[0] === 'child') {
      if (!info.hasOwnProperty('children')) {
        info.children = []
      }
      if (typeof info.children[idx] !== 'object') {
        info.children[idx] = {}
      }

      info.children[idx][label] = value
    }
  }

  handleParentInfo = (name, label, value) => {
    if (name === 'mother_info' || name === 'father_info') {
      if (!info.hasOwnProperty('parents')) {
        info.parents = [{}, {}]
      }

      switch (name) {
        case 'mother_info':
          info.parents[0][label] = value
          break
        case 'father_info':
          info.parents[1][label] = value
          break
        default:
          break
      }
    }
  }

  nextStep = () => {
    let next = this.state.step
    if (this.state.step !== this.state.formState.length) {
      next += 1
    }
    this.setState({step: next})
  }

  previousStep = () => {
    let prev = this.state.step
    if (this.state.step > 0) {
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
      for (let i = 0; i < this.state.numOfChildren; i++) {
        const name = `child_${i + 1}_info`
        children.push(<Partial name={name} heading={`PLEASE ENTER YOUR ${name} INFO:`} onChange={this.handleChildrenInfo} />)
      }
      nextformState.push(children)
    }

    // Add parents form
    const parents = [<Partial key='1' name='mother_info' heading='PLEASE ENTER YOUR MOTHER INFO:' onChange={this.handleParentInfo} />, <Partial key='2' name='father_info' heading='PLEASE ENTER YOUR FATHER INFO:' onChange={this.handleParentInfo} />]

    nextformState.push(parents)

    this.setState({
      formState: nextformState
    })
  }

  navButtons = () => {
    const { formState, step } = this.state
    const formLength = formState.length - 1

    if (step) {
      return (
        <div>
          <BackButton
            onClick={this.previousStep} />
          {step < formLength && (
            <ForwardButton
              onClick={this.nextStep}
              style={styleMUI.forward} />
          )}
          {step === formLength && (
            <SubmitButton
              label='Submit'
              style={styleMUI.forward} />
          )}
        </div>
      )
    }
  }

  render () {
    const { formState, step } = this.state
    console.log(this.props)

    return (
      <Form {...this.props} >
        {formState[step]}
        {this.navButtons()}
      </Form>
    )
  }
}

export default SignUp
