import { useAddAllElements, useMultiplyAllElements } from './'
import { renderHook } from "@testing-library/react-hooks";

describe('useAddAllElements', () => {
  it('should add all elements in a array', () => {
    const { result } = renderHook(() => useAddAllElements([1,2,3,4,5]));

    expect(result).toBe(15);
  })
});

describe('useMultiplyAllElements', function () {

  it('should multiply all the elements in a array', () => {
    const { result } = renderHook(() => useMultiplyAllElements([1,2,3,4,5]));

    expect(result).toBe(120);
  })

});
