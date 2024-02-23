import { useState, useEffect, SetStateAction, Dispatch } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// custom hook for likes
function getStorageValue(key: string, defaultValue: string) {
  const saved = localStorage.getItem(key);
  const initial = saved ? JSON.parse(saved) : null;

  return typeof initial === 'string' ? initial : defaultValue;
}

export const useLocalStorage = (
  key: string,
  defaultValue: string
): [string, Dispatch<SetStateAction<string>>] => {
  const [value, setValue] = useState<string>(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
