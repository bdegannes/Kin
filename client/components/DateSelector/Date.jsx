import React from 'react'
import DateMonth from '../Selectors/DateMonth'
import DateDay from '../Selectors/DateDay'
import DateYear from '../Selectors/DateYear'

import CSSModules from 'react-css-modules'
import styles from './DateSelectorStyle.scss'

const $accentMustard = '#FFC107';
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
const DateDropDown = (props) => (
  <div styleName='dateSelector'>
    <DateMonth dropDownStyle={styleMUI} />
    <DateDay dropDownStyle={styleMUI} />
    <DateYear dropDownStyle={styleMUI} />
  </div>
)

export default CSSModules(DateDropDown, styles)
