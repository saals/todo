import React, { useEffect, useState } from 'react';
import Item from './Item';
import Button from './Button';

const items = [
  { id: 1, desc: 'aaa bb c' },
  { id: 2, desc: 'bbb cc d' },
  { id: 3, desc: 'ccc dd e' },
  { id: 4, desc: 'ddd ee f' }
];

/*
class List extends React.Component {
  state = {
    counter: 0
  };

  handleCheck = (e) => {
    const dateOfChange = new Date().toLocaleString();
    const task = e.target.nextSibling.textContent;
    console.log(`Вы изменили задачу "${ task }"`, dateOfChange, e.target.checked);

    this.setState((state) => {
      // const counter = state.counter + ((e.target.checked && 1) || (!e.target.checked && -1));
      const counter = state.counter + (e.target.checked ? 1 : -1);
      return { counter };
    });
  };

  showInfo = () => {
    console.log(`Выполнено задач: ${ this.state.counter }`);
  };

  render() {
    return (
      <>
        <ul>
          { items.map(item => (
              <Item key={ item.id } id={ item.id } desc={ item.desc } onChange={ this.handleCheck } />
            )
          ) }
        </ul>
        <Button onClick={ this.showInfo } />
      </>
    )
  };
}
*/

const List = function() {
  const [counter, setCounter] = useState(0);

  const [tasks, setTasks] = useState([]);
  useEffect(() => setTasks(items), []);

  const handleCheck = (e) => {
    const dateOfChange = new Date().toLocaleString();
    const task = e.target.nextSibling.textContent;
    console.log(`Вы изменили задачу "${task}"`, dateOfChange, e.target.checked);

    setCounter(counter + (e.target.checked ? 1 : -1));
  };

  const showInfo = () => {
    console.log(`Выполнено задач: ${counter}`);
  };

  return (
    <>
      <ul>
        {tasks.map(item => (
            <Item key={item.id} id={item.id} desc={item.desc} onChange={handleCheck} />
          )
        )}
      </ul>
      <Button onClick={showInfo} />
    </>
  )
}

export default List;
