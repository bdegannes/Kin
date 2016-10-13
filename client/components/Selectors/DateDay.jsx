import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const days = [];
for(let i=1; i<=31; i++){
  days.push({value: i, day: i})
}

const day = days.map((item) => (
  <MenuItem
    key={item.value}
    value={item.value}
    primaryText={item.day}
  />
))

export default class DateSelectorDay extends Component {
  constructor(props){
    super(props)
    this.state = {value: 1}
  }

  handleChange = (event, key, value) => {
    this.setState({value}, function () {
      this.props.onChange(value)
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
          {day}
        </DropDownMenu>
      </MuiThemeProvider>
    )
  }

}
