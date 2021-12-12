import React from 'react'

import { useAddAllElements, useMultiplyAllElements } from 'use-reduce'

const App = () => {
  const example1 = useAddAllElements([1,2,3,4,5])
    const example2 = useMultiplyAllElements([1,2,3,4,5])
  return (
      <>
    <div>
      <p>Let's add [1,2,3,4,5]</p>
      <p>{example1}</p>
    </div>

    <div>
      <p>Let's multiply [1,2,3,4,5]</p>
      <p>{example2}</p>
    </div>
      </>
  )
}
export default App
