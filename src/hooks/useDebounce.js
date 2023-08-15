import React, { useEffect } from 'react';

const useDebounce = () => {
  let timeout;

  const debounce = (func, wait) => (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }

  useEffect(() => {

    return () => {
      if (!timeout) return;
      clearTimeout(timeout);
    }
    
  }, []);

  return { debounce }
}

export default useDebounce;