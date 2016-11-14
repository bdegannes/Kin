import React, { Component, PropTypes } from 'react'
import { find } from 'lodash'

import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const propTypes = {
  onChange: PropTypes.func.isRequired,
  dropDownStyle: PropTypes.object,
  getYear: PropTypes.object
}

const setYear = (() => {
  const maxYear = new Date().getFullYear()
  const minYear = maxYear - 100
  const years = [{value: 0, year: 'YEAR'}]

  let v = 0
  for (let i = maxYear; i >= minYear; i--) {
    v++
    years.push({value: v, year: i})
  }
  return years
})()

const year = setYear.map((item) => (
  <MenuItem key={item.year} value={item.value} primaryText={item.year} />
))

class DateSelectorYear extends Component {
  constructor (props) {
    super(props)
    this.state = {value: 0}
  }

  handleChange = (event, key, value) => {
    const date = event.target.innerText
    this.setState({value}, function () {
      this.props.onChange(date)
    })
  }

  render () {
    const { getYear } = this.props
    const { value } = this.state
    let yearValue = value
    if (getYear) {
      yearValue = find(setYear, (o) => o.year === getYear.year).value
    }
    return (
      <MuiThemeProvider>
        <DropDownMenu
          value={yearValue}
          onChange={this.handleChange}
          underlineStyle={this.props.dropDownStyle.underline}
          iconStyle={this.props.dropDownStyle.icon}
          labelStyle={this.props.dropDownStyle.label} >
          {year}
        </DropDownMenu>
      </MuiThemeProvider>
    )
  }
}

DateSelectorYear.propTypes = propTypes

export default DateSelectorYear
