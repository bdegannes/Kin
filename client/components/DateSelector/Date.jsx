import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import * as _u from '../../utils'
import DateDay from '../Selectors/DateDay'
import DateYear from '../Selectors/DateYear'
import DateMonth from '../Selectors/DateMonth'

import CSSModules from 'react-css-modules'
import styles from './DateSelectorStyle.scss'

const propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  personal: PropTypes.object,
  spouse: PropTypes.object,
  children: PropTypes.object,
  parents: PropTypes.object
}

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
@CSSModules(styles)
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
    const { month, day, year } = this.state
    if (month && day && year) {
      return new Date(`${month} ${day} ${year}`)
    }
  }

  render () {
    const date = _u.dateParser(this.props)
    return (
      <div styleName='dateSelector'>
        <DateMonth getMonth={date} dropDownStyle={styleMUI} onChange={this.setMonth} />
        <DateDay getDay={date} dropDownStyle={styleMUI} onChange={this.setDay} />
        <DateYear getYear={date} dropDownStyle={styleMUI} onChange={this.setYear} />
      </div>
    )
  }
}

DateDropDown.propTypes = propTypes

const mapStateToProps = ({ memberFormData }) => memberFormData
export default connect(mapStateToProps, null)(DateDropDown)
