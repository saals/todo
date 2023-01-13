import React from 'react';
import InputGroup from './InputGroup'

const withRequired = (Component, requiredKeys) => {
  return class WithRequired extends React.Component {
    state = { isInvalid: false }

    handleInput(e) {
      this.setState({ [e.target.name]: e.target.value })
    }

    handleClick() {
      const isInvalid = requiredKeys.some(key => !this.state[key]);
      this.setState({ isInvalid })
    }

    render() {
      return <>
        <Component
          onChange={e => this.handleInput(e)}
          onClick={() => this.handleClick()}
        />
        {this.state.isInvalid && "Error"}
      </>
    }
  }
}

export const WithRequiredFirstname = withRequired(InputGroup, [ "firstname" ])
