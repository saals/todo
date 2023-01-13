import React from 'react';
import InputGroup from './InputGroup'


class WithRequired extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isInvalid: false }
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClick = () => {
    const { requiredKeys } = this.props
    const isInvalid = requiredKeys.some(key => !this.state[key]);
    this.setState({ isInvalid })
  }

  render() {
    return <>
      <div>
        {this.props.render({
          onChange: this.handleInput,
          onClick: this.handleClick
        })}
      </div>
      {this.state.isInvalid && "Error"}
    </>
  }
}

export const WithRequiredFirstname = () => {
  return (
    <WithRequired
      requiredKeys={[ "firstname" ]}
      render={({ onClick, onChange }) => {
        return (
          <InputGroup
            onClick={() => onClick()}
            onChange={(e) => onChange(e)}
          />
        )
      }}
    />
  )
}
