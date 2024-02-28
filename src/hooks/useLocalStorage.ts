import { useState } from "react";

/**
 * can be used multiple places in the app to interact with local storage
 * @param key
 * @param defaultValue
 * @returns
 */

const useLocalStorage = (key: string, defaultValue: unknown) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (error) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
  });

  const setLocalStorageStateValue = (valueOrFn: unknown) => {
    let newValue;
    if (typeof valueOrFn === "function") {
      const fn = valueOrFn;
      newValue = fn(localStorageValue);
    } else {
      newValue = valueOrFn;
    }
    localStorage.setItem(key, JSON.stringify(newValue));
    setLocalStorageValue(newValue);
  };

  return { value: localStorageValue, setValue: setLocalStorageStateValue };
};

export default useLocalStorage;
