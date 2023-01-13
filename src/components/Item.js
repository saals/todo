import React from 'react';

function Item({ id, desc, onChange }) {
  return (
    <li>
      <input type="checkbox" id={ id } onChange={ onChange } />
      <label htmlFor={ id }>{ desc }</label>
    </li>
  )
}

/*class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  };

  onChange = () => this.setState((state) => {
    // console.log(this.state.checked)
    return { checked: !state.checked };
  })

  render() {
    const { checked } = this.state;
    const { id, desc } = this.props;
    return (
      <li>
        <input type="checkbox" id={ id } checked={ checked } onChange={ this.onChange } />
        <label htmlFor={ id }>{ desc }</label>
      </li>
    )
  };
}*/

export default Item;
