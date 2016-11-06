import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as FormActions from '../actions/form.actions.js'
import Form from '../components/Forms/Form'
import Demographics from '../components/Forms/DemographicsForm'
import Partial from '../components/Forms/FamilyForm'
import MultiPartial from '../components/Forms/CollapseComponent'
import BackButton from '../components/Buttons/BackButton'
import ForwardButton from '../components/Buttons/ForwardButton'
import SubmitButton from '../components/Buttons/Button.jsx'

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
      married: false,
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
    const demographics = {}
    this.setState({
      married: content.married,
      numOfChildren: +content.children
    }, function () {
      demographics.married = content.married
      demographics.location = content.locale
      demographics.numOfChildren = this.state.numOfChildren

      this.props.updateDemographics(demographics)

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
    this.props.updatePersonal(info)
  }

  handleSpouseInfo = (name, label, value) => {
    if (name === 'spouse_info') {
      if (!info.hasOwnProperty('spouse')) {
        info.spouse = {}
      }
      info.spouse[label] = value
    }
    this.props.updateSpouse(info.spouse)
  }

  handleChildrenInfo = (name, label, value) => {
    const child = name.split('_')
    const idx = +child[1] - 1
    if (child[0] === 'child') {
      if (!info.hasOwnProperty('children')) {
        info.children = {}
      }
      if (typeof info.children[idx] !== 'object') {
        info.children[idx] = {}
      }

      info.children[idx][label] = value
    }
    this.props.updateChildren(info.children)
  }

  handleParentInfo = (name, label, value) => {
    if (name === 'mother_info' || name === 'father_info') {
      if (!info.hasOwnProperty('parents')) {
        info.parents = { mother: {}, father: {} }
      }

      switch (name) {
        case 'mother_info':
          info.parents.mother[label] = value
          break
        case 'father_info':
          info.parents.father[label] = value
          break
        default:
          break
      }
    }
    this.props.updateParent(info.parents)
  }

  nextStep = () => {
    const { step, formState } = this.state
    let next = step
    if (step !== formState.length) {
      next += 1
    }
    this.setState({ step: next })
  }

  previousStep = () => {
    const { step } = this.state
    let prev = step
    if (step > 0) {
      prev -= 1
    }
    this.setState({ step: prev })
  }

  formState = () => {
    const { formState, married, numOfChildren } = this.state
    let nextformState = [...formState]

    // personal info form partial
    nextformState.push(<Partial name='personal_info' heading='PLEASE ENTER YOUR INFO:' onChange={this.handlePersonalInfo} />)

    // Add spouse form if married
    if (married) {
      nextformState.push(<Partial name='spouse_info' heading='PLEASE ENTER YOUR SPOUSE INFO:' onChange={this.handleSpouseInfo} />)
    }

    // Add form for each child
    if (numOfChildren) {
      nextformState.push(<MultiPartial count={numOfChildren} type='children' onChange={this.handleChildrenInfo} />)
    }

    // Add parents form
    // const parents = [<Partial key='1' name='mother_info' heading='PLEASE ENTER YOUR MOTHER INFO:' onChange={this.handleParentInfo} />, <Partial key='2' name='father_info' heading='PLEASE ENTER YOUR FATHER INFO:' onChange={this.handleParentInfo} />]

    nextformState.push(<MultiPartial count={2} type='parents' onChange={this.handleParentInfo} />)

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
              style={styleMUI.forward}
              onSubmit={this.handleSubmit} />
          )}
        </div>
      )
    }
  }

  handleSubmit = () => {
  }

  render () {
    const { formState, step } = this.state
    return (
      <Form {...this.props} >
        {formState[step]}
        {this.navButtons()}
      </Form>
    )
  }
}

const mapStateToProps = ({memberFormData}) => memberFormData
const mapDispatchToProps = (dispatch) => bindActionCreators(FormActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
