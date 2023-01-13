import React from 'react'
import './style.css'
import UncontrolledComponent from './UncontrolledComponent'

class DiverseForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      statement: '',
      isLie: false
    }

    this.inputRef = React.createRef()
    this.componentRef = React.createRef()
  }


  handleChange = (event) => {
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { isLie, statement } = this.state
    alert(`Утверждение "${statement}" является ${!isLie ? "правдой" : "ложью"}`)
  }

  handleClick = () => {
    console.log(this.inputRef.current.value)
    console.log(this.inputRef.current)
    console.log(this.componentRef.current)
  }

  render() {
    return (
      <div>
        <h1>Forms</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Введите утверждение
            <input name="statement" type="text"
                   onChange={this.handleChange} value={this.state.statement}
            />
          </label>
          <label>
            Ложно ли утверждение выше:
            <input name="isLie" type="checkbox"
                   onChange={this.handleChange} value={this.state.isLie}
            />
          </label>
          <label>
            Никакого контроля
            <input ref={this.inputRef} name="refInput"
                   type="text" defaultValue="daaad input"
            />
          </label>
          <label>
            Полная анархия
            <UncontrolledComponent name="refComponent" ref={this.componentRef} />
          </label>

          <button onClick={this.handleClick}>Принять</button>
        </form>
      </div>
    );
  }
}

export default DiverseForm
