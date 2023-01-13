import React from 'react'

class Parent extends React.Component {
  render() {
    const prop = "Boo-Boo-Boo"
    return (
      <div>
        <h2>Prop drilling</h2>
        <ComponentOne prop={prop} />
      </div>
    )
  }
}

const ComponentOne = ({ prop }) => <ComponentTwo prop={prop} />
const ComponentTwo = ({ prop }) => <ComponentThree prop={prop} />
const ComponentThree = ({ prop }) => <h1 style={{ color: 'red' }}>{prop}</h1>

export default Parent
