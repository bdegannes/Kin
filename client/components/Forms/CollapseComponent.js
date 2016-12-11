import React, { Component, PropTypes } from 'react'
import Section from './CollapseSection'

const propTypes = {
  count: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

class CollapseComponent extends Component {
  constructor (props) {
    super(props)
    this.state = { openSectionIndex: -1 }
  }

  toggleOne = (id) => {
    const { openSectionIndex } = this.state
    if (openSectionIndex === id) {
      this.setState({ openSectionIndex: -1 })
    } else {
      this.setState({ openSectionIndex: id })
    }
  }

  handleChangeInput = (name, label, value) => {
    this.props.onChange(name, label, value)
  }

  buildSections = (num, type) => {
    const { openSectionIndex } = this.state
    const sections = []
    let heading
    let name

    for (let i = 0; i < num; i++) {
      const openStatus = (i === openSectionIndex)
      if (type === 'children') {
        name = `child ${i + 1}`
        heading = `PLEASE ENTER YOUR ${name} INFO:`
      } else if (type === 'parents') {
        name = (i === 0) ? 'mother' : 'father'
        heading = `PLEASE ENTER YOUR ${name} INFO:`
      }
      sections.push(<Section key={i} num={i} toggleOne={this.toggleOne} open={openStatus} name={name} heading={heading} onChange={this.handleChangeInput} />)
    }

    return sections
  }

  render () {
    const { count, type } = this.props
    const sections = this.buildSections(count, type)
    return (
      <div >
        {sections}
      </div>
    )
  }
}

CollapseComponent.PropTypes = propTypes

export default CollapseComponent
