import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const allStates = "Alabama_Alaska_Arizona_Arkansas_California_Colorado_Connecticut_Delaware_Florida_Georgia_Hawaii_Idaho_Illinois_Indiana_Iowa_Kansas_Kentucky_Louisiana_Maine_Maryland_Massachusetts_Michigan_Minnesota_Mississippi_Missouri_Montana Nebraska_Nevada_New Hampshire_New Jersey_New Mexico_New York_North Carolina_North Dakota_Ohio_Oklahoma_Oregon_Pennsylvania_Rhode Island_South Carolina_South Dakota_Tennessee_Texas_Utah_Vermont_Virginia_Washington_West Virginia_Wisconsin_Wyoming".split("_");

const allStatesAbbr = "AL_AK_AZ_AR_CA_CO_CT_DE_FL_GA_HI_ID_IL_IN_IA_KS_KY_LA_ME_MD_MA_MI_MN_MS_MO_MT_NE_NV_NH_NJ_NM_NY_NC_ND_OH_OK_OR_PA_RI_SC_SD_TN_TX_UT_VT_VA_WA_WV_WI_WY".split("_")

const getLocations = () => {
  const locations = [];
  for ( let i = 0; i <= allStates.length; i++ ){
    locations.push({
      value: i,
      fullStateName: allStates[i],
      abbrStateName: allStatesAbbr[i]
    })
  };

  const location = locations.map((item) => (
    <MenuItem
      key={item.abbrStateName}
      value={item.value}
      primaryText={item.abbrStateName} />
  ));

  return location;
}

export default class LocationSelector extends Component{
  constructor(props){
    super(props)
    this.state = {value: 0}
  }

  handleChange = (event, key, value) => this.setState({value})

  render () {
    return (
      <MuiThemeProvider>
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}>
          {getLocations()}
        </DropDownMenu>
      </MuiThemeProvider>
    )
  }
}
