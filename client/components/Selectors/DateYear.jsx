import React, { Component, PropTypes } from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const propTypes = {
  onChange: PropTypes.func.isRequired,
  dropDownStyle: PropTypes.object
}

const setYear = () => {
  const maxYear = new Date().getFullYear()
  const minYear = maxYear - 100
  const years = []

  let v = 0
  for (let i = maxYear; i >= minYear; i--) {
    v++
    years.push({value: v, year: i})
  }
  return years
}

const year = setYear().map((item) => (
  <MenuItem key={item.year} value={item.value} primaryText={item.year} />
))

class DateSelectorYear extends Component {
  constructor (props) {
    super(props)
    this.state = {value: 1}
  }

  handleChange = (event, key, value) => {
    const date = event.target.innerText
    this.setState({value}, function () {
      this.props.onChange(date)
    })
  }

  render () {
    return (
      <MuiThemeProvider>
        <DropDownMenu
          value={this.state.value}
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
