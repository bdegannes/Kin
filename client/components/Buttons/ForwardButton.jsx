import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigationForward from 'material-ui/svg-icons/navigation/arrow-forward';

const Forward = () => (
  <MuiThemeProvider>
    <FloatingActionButton>
      <NavigationForward/>
    </FloatingActionButton>
  </MuiThemeProvider>
)

export default Forward
