import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class DateSelector extends React.Component {
  constructor(props) {
   super(props);
   this.state = {value: 1};
  //  this.handleChange = this.handleChange.bind(this)
 }

  handleChange = (event, index, value) => this.setState({value})

  render () {
    return (
      <MuiThemeProvider>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
           <MenuItem value={1} primaryText="Never" />
           <MenuItem value={2} primaryText="Every Night" />
           <MenuItem value={3} primaryText="Weeknights" />
           <MenuItem value={4} primaryText="Weekends" />
           <MenuItem value={5} primaryText="Weekly" />
         </DropDownMenu>
      </MuiThemeProvider>
    )
  }
}
