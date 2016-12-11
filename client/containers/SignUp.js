import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { uniqueId } from 'lodash'

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

let info = {}

class SignUp extends Component {
  constructor () {
    super()
    this.state = {
      formStateSet: false,
      formState: [],
      step: 0
    }
  }

  componentWillMount () {
    this.setState({
      formState: [<Demographics onClick={this.handleDemoClickNext} onChange={this.handleDemoChange} />]
    })
  }

  handleDemoChange = (info) => {
    this.props.updateDemographics(info)
  }

  handleDemoClickNext = () => {
    if (!this.state.formStateSet) {
      this.formState()
      this.setState({ formStateSet: true })
    }
    this.nextStep()
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
    const child = name.split(' ')
    const idx = +child[1]

    if (!info.hasOwnProperty('children')) {
      info = {...info, ...{children: {}}}
    }
    info.children[idx] = {...info.children[idx], ...{[label]: value}}
    this.props.updateChildren(info.children)
  }

  handleParentInfo = (name, label, value) => {
    if (!info.hasOwnProperty('parents')) {
      info = {...info, ...{ parents: { mother: {}, father: {} } }}
    }
    if (name === 'mother') {
      info.parents.mother = {...info.parents.mother, ...{[label]: value}}
    } else if (name === 'father') {
      info.parents.father = {...info.parents.father, ...{[label]: value}}
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
    const { personal } = this.props
    const { formState } = this.state
    let nextformState = [...formState]

    console.log(personal)
    // personal info form partial
    nextformState.push(<Partial name='personal_info' heading='PLEASE ENTER YOUR INFO:' onChange={this.handlePersonalInfo} />)

    // Add spouse form if married
    if (personal.married) {
      console.log('married')
      nextformState.push(<Partial key={uniqueId('s_')} name='spouse_info' heading='PLEASE ENTER YOUR SPOUSE INFO:' onChange={this.handleSpouseInfo} />)
    }

    // Add form for each child
    if (personal.children) {
      console.log('children', personal.children)
      nextformState.push(<MultiPartial key={uniqueId('s_')} count={personal.children} type='children' onChange={this.handleChildrenInfo} />)
    }

    // Add parents form
    nextformState.push(<MultiPartial key={uniqueId('p_')} count={2} type='parents' onChange={this.handleParentInfo} />)

    console.log(nextformState)
    this.setState({
      formState: nextformState
    })
  }

  navButtons = () => {
    const { formState, step } = this.state
    const formLength = formState.length - 1

    if (step) {
      return (
        <div style={{margin: '15px 0 0'}}>
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

const mapStateToProps = ({ memberFormData }) => memberFormData
const mapDispatchToProps = (dispatch) => bindActionCreators(FormActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
