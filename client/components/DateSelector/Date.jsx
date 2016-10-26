import React, { Component } from 'react'
import DateMonth from '../Selectors/DateMonth'
import DateDay from '../Selectors/DateDay'
import DateYear from '../Selectors/DateYear'

import CSSModules from 'react-css-modules'
import styles from './DateSelectorStyle.scss'

const $accentMustard = '#FFC107'
const styleMUI = {
  underline: {
    borderTop: 'none'
  },
  icon: {
    fill: $accentMustard
  },
  label: {
    color: 'white'
  }
}
// TODO: Styles for Birth component
class DateDropDown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      month: '',
      day: '',
      year: ''
    }
  }

  setMonth = (val) => {
    this.setState({month: val}, function () {
      this.props.onChange(this.buildDate())
    })
  }
  setDay = (val) => {
    this.setState({day: val}, function () {
      this.props.onChange(this.buildDate())
    })
  }
  setYear = (val) => {
    this.setState({year: val}, function () {
      this.props.onChange(this.buildDate())
    })
  }

  buildDate = () => {
    const date = `${this.state.month} ${this.state.day} ${this.state.year}`
    return date
  }

  render () {
    return (
      <div styleName='dateSelector'>
        <DateMonth dropDownStyle={styleMUI} onChange={this.setMonth} />
        <DateDay dropDownStyle={styleMUI} onChange={this.setDay} />
        <DateYear dropDownStyle={styleMUI} onChange={this.setYear} />
      </div>
    )
  }
}

export default CSSModules(DateDropDown, styles)
