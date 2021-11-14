import {useEffect, useState} from "react";

/**
 * 自定义hook：页面挂载时执行的函数 callback
 * @param callback
 */
const useMount = (callback: () => void) => {
    useEffect(() => {
        callback();
    },[]);
}

// const useDebounce = (callback, delay) => {
//     let timer = null;
//   return (...params) => {
//       if (timer) {
//           clearTimeout(timer)
//       }
//       timer = setTimeout(function () {
//           callback(...params)
//       }, delay)
//   }
// };

const useDebounce = (value: any, delay: number) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        // 每次在 value 和 delay 变化之后，设置一个定时器
        const timer = setTimeout(() => setDebounceValue(value), delay);
        // 每次在上一个 useEffect 处理完以后再运行
        return () => clearTimeout(timer);
    }, [value, delay]);

    return debounceValue;
}
export {
    useMount,
    useDebounce
}
