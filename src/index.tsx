import { ArrayProps, ObjectArrayProps, ConvertDictionaryProps} from "./type";
import { isEmpty, add, multiply } from "./utils";

export const useAddAllElements = (arr: ArrayProps) => arr.reduce(add, 0);

export const useMultiplyAllElements = (arr: ArrayProps) => arr.reduce(multiply, 1);

export const useArrayToObject = (arr: ObjectArrayProps, field: string) => {

  return arr.reduce((acc: ConvertDictionaryProps | {}, cur: ConvertDictionaryProps) => {
    if(!isEmpty(acc)){

      return {...acc, [cur[field]]: cur}
    }

   return {[cur[field]]: cur};
  }, {})
};
