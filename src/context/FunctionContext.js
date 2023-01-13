import React from 'react'

const CustomContext = React.createContext()

function Parent() {
  // const state = {
  //   value: {
  //     title: "Function Context"
  //   }
  // }

  const [ value, setValue ] = React.useState({ title: "Function Context" })
  // React.useEffect(() => setValue({ title: "Function Context" }),[])

  return (
    <CustomContext.Provider value={value}>
      <h2>function-component</h2>
      <ComponentOne />
    </CustomContext.Provider>
  )
}

const ComponentOne = () => <ComponentTwo />
const ComponentTwo = () => <ComponentThree />
const ComponentThree = () => {
  const value = React.useContext(CustomContext);
  return <h1 style={{ color: 'red' }}>{value.title}</h1>
}
export default Parent
