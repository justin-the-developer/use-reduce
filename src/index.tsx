type ArrayProps = number[];

const add = (a: number, b: number) => {
  return a+b;
}

const multiply = (a: number, b: number) => {
  return a * b;
}

export const useAddAllElements = (arr: ArrayProps) => arr.reduce(add, 0);

export const useMultiplyAllElements = (arr: ArrayProps) => arr.reduce(multiply, 1);
