import React from "react";

export function useDebounce(onChangeText, delay = 1000) {
    var delayFn;
    
    const timeoutFn = () => onChangeText

    clearTimeout(delayFn);
    delayFn = setTimeout(timeoutFn, delay);

}