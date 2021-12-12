import React from 'react'

import { useAddAllElements, useMultiplyAllElements, useArrayToObject } from 'use-reduce'

const exampleArr = [1,2,3,4,5]
const exampleArr2 = [
  {
    name: "justin",
    age: 5,
    gender: "male",
  },
  {
    name: "lindsay",
    age: 6,
    gender: "female",
  },
];

const App = () => {
  const example1 = useAddAllElements(exampleArr)
  const example2 = useMultiplyAllElements(exampleArr)
  const example3 = useArrayToObject(exampleArr2, "name");

  return (
    <>
      <div>
        <p>Example 1: useAddAllElements</p>
        <p>Let's add [1,2,3,4,5]</p>
        <p>{example1}</p>
      </div>

      <div>
        <p>Example 2: useMultiplyAllElements</p>
        <p>Let's multiply [1,2,3,4,5]</p>
        <p>{example2}</p>
      </div>

      <div>
        <p>Example 3: useArrayToObject</p>
        <p>Let's make array to object</p>
        <p>As is: {JSON.stringify(exampleArr2)}</p>
        <p>To be: {JSON.stringify(example3)}</p>
      </div>
    </>
  )
}
export default App
