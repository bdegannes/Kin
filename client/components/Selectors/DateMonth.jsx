import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const months = [
  {value: 1, month: 'January'},
  {value: 2, month: 'February'},
  {value: 3, month: 'March'},
  {value: 4, month: 'April'},
  {value: 5, month: 'May'},
  {value: 6, month: 'June'},
  {value: 7, month: 'July'},
  {value: 8, month: 'August'},
  {value: 9, month: 'September'},
  {value: 10, month: 'October'},
  {value: 11, month: 'November'},
  {value: 12, month: 'December'},
]

const dropDownMonths = months.map((item) => {
  const shortMonth = item.month.substring(0, 3);
  return(<MenuItem key={item.value} value={item.value} primaryText={shortMonth} />)
})

export default class DateSelectorMonth extends React.Component {
  constructor(props) {
   super(props);
   this.state = {value: 1};
 }


  handleChange = (event, key, value) => {
    this.setState({value}, function () {
      this.props.onChange(months[key].month)
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
          labelStyle={this.props.dropDownStyle.label}
        >
          {dropDownMonths}
        </DropDownMenu>
      </MuiThemeProvider>
    )
  }
}
