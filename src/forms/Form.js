import React from 'react'
import './style.css'

class Form extends React.Component {
  state = {
    statement: '',
    isLie: false
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
          <button>Принять</button>
        </form>
      </div>
    );
  }
}

export default Form
