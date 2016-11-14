export const noop = () => undefined

export const formValueProperties = (props) => {
  const { personal, spouse, children, parents, name } = props

  if (name === 'personal_info') {
    return personal
  } else if (name === 'spouse_info') {
    return spouse
  } else if (name.split(' ')[0] === 'child') {
    let idx = name.split(' ')[1]
    return children[idx]
  } else if (name === 'mother' || name === 'father') {
    return parents[name]
  } else {
    return ''
  }
}

export const dateParser = (props) => {
  let partial = formValueProperties(props)
  if (partial.birth) {
    const d = new Date(partial.birth)

    return {
      month: d.getMonth() + 1,
      day: d.getDate(),
      year: d.getFullYear()
    }
  }
}
