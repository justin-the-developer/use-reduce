import { useAddAllElements, useMultiplyAllElements, useArrayToObject } from './'
import { renderHook } from "@testing-library/react-hooks";

describe('useAddAllElements', () => {
  it('should add all elements in a array', () => {
    const { result } = renderHook(() => useAddAllElements([1,2,3,4,5]));

    expect(result.current).toBe(15);
  })
});

describe('useMultiplyAllElements', () => {
  it('should multiply all the elements in a array', () => {
    const { result } = renderHook(() => useMultiplyAllElements([1,2,3,4,5]));

    expect(result.current).toBe(120);
  })
});

describe('useArrayToObject', () => {
  const exampleArr = [
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
  const expected = {"justin":{"name":"justin","age":5,"gender":"male"},"lindsay":{"name":"lindsay","age":6,"gender":"female"}}

  it('should convert array to object within the field that provided', () =>{
    const{ result } = renderHook(() => useArrayToObject(exampleArr, 'name'));

    expect(result.current).toMatchObject(expected);
  })
})

