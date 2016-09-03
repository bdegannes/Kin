import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class DateSelector extends React.Component {
  constructor(props) {
   super(props);
   this.state = {value: 1};
   this.handleChange = this.handleChange.bind(this)
 }

  handleChange (event, index, value) { this.setState( {value: value} ) }

  render () {
    return (
      <MuiThemeProvider>
        <SelectField value={this.state.value} onChange={this.handleChange}>
           <MenuItem value={1} primaryText="Never" />
           <MenuItem value={2} primaryText="Every Night" />
           <MenuItem value={3} primaryText="Weeknights" />
           <MenuItem value={4} primaryText="Weekends" />
           <MenuItem value={5} primaryText="Weekly" />
        </SelectField>
      </MuiThemeProvider>
    )
  }
}
