import { useEffect, useState } from "react";

export function isFalsy(value: any) {
  return value === 0 ? true : !!value;
}
export function clearObject(object: any) {
  const result = { ...object };
  Object.keys(result).forEach((key: string) => {
    if (!isFalsy(result[key])) {
      delete result[key];
    }
  });
  return result;
}

// 自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook
export const useMount = (callBack: Function) => {
  useEffect(() => {
    callBack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
// 这是一个关于防抖的功能
export const useDebounce = (value: any, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    // 每次改变都创建一个定时器
    let timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    // 在上一个 useEffect处理完成后执行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};
