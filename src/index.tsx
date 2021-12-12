import { ArrayProps, ObjectArrayProps, ConvertDictionaryProps} from "./type";
import { isEmpty } from "./utils/is-empty";

const add = (a: number, b: number) => {
  return a+b;
}

export const useAddAllElements = (arr: ArrayProps) => arr.reduce(add, 0);

const multiply = (a: number, b: number) => {
  return a * b;
}

export const useMultiplyAllElements = (arr: ArrayProps) => arr.reduce(multiply, 1);

export const useArrayToObject = (arr: ObjectArrayProps, field: string) => {

  return arr.reduce((acc: ConvertDictionaryProps | {}, cur: ConvertDictionaryProps) => {
    if(!isEmpty(acc)){

      return {...acc, [cur[field]]: cur}
    }

   return {[cur[field]]: cur};
  }, {})
};
