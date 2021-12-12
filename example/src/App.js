import React from 'react'

import { useAddAllElements, useMultiplyAllElements } from 'use-reduce'

const exampleArr = [1,2,3,4,5]

const App = () => {
  const example1 = useAddAllElements(exampleArr)
  const example2 = useMultiplyAllElements(exampleArr)

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
