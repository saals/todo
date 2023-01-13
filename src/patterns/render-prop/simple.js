import React from 'react';

class SharedCmpt extends React.Component {
  render() {
    return (
      <div>
        {this.props.render({ prop: 'my render prop' })}
        {this.props.children({ prop: 'my children prop' })}
      </div>
    )
  }
}

const RenderCmpt = () => {
  return (
    <SharedCmpt render={({ prop }) => <h1>{prop}</h1>}>
      {({ prop }) => <>
        <h1>{prop}</h1>
        <h2>{prop}</h2>
      </>}
    </SharedCmpt>
  )
}

export default RenderCmpt
