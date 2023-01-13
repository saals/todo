import React from 'react'

const CustomContext = React.createContext()

class Parent extends React.Component {
  state = {
    value: {
      title: "Class Context"
    }
  }

  render() {
    return (
      <CustomContext.Provider value={this.state.value}>
        <h2>class-component</h2>
        <ComponentOne />
      </CustomContext.Provider>
    )
  }
}

const ComponentOne = () => <ComponentTwo />
const ComponentTwo = () => <ComponentThree />
const ComponentThree = () =>
  <CustomContext.Consumer>
    {(value) => <h1 style={{ color: 'red' }}>{value.title}</h1>}
  </CustomContext.Consumer>

export default Parent
