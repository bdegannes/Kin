import React, { Component, PropTypes } from 'react'

import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const propTypes = {
  onChange: PropTypes.func.isRequired,
  dropDownStyle: PropTypes.object,
  getDay: PropTypes.object
}

const days = [{value: 0, day: 'DAY'}]
for (let i = 1; i <= 31; i++) {
  days.push({value: i, day: i})
}

const day = days.map((item) => (
  <MenuItem
    key={item.value}
    value={item.value}
    primaryText={item.day} />
))

class DateSelectorDay extends Component {
  constructor (props) {
    super(props)
    this.state = {value: 0}
  }

  handleChange = (event, key, value) => {
    this.setState({value}, function () {
      this.props.onChange(value)
    })
  }

  render () {
    const { getDay } = this.props
    const { value } = this.state

    return (
      <MuiThemeProvider>
        <DropDownMenu
          value={(getDay) ? getDay.day : value}
          onChange={this.handleChange}
          underlineStyle={this.props.dropDownStyle.underline}
          iconStyle={this.props.dropDownStyle.icon}
          labelStyle={this.props.dropDownStyle.label} >
          {day}
        </DropDownMenu>
      </MuiThemeProvider>
    )
  }
}

DateSelectorDay.propTypes = propTypes

export default DateSelectorDay
