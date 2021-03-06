// useGlobalState, global state management in a hook!!!
// Written by: Nightness
import { useEffect, useState } from "react";

interface Listener {
    key: string;
    callback: (value: any) => void;
}

const globalObjects: any = {};
const listeners = {} as any;

const set = (name: string, value: any) => {
  globalObjects[name as any] = value;
  listeners[name].forEach((listener: Listener) => {
    listener.callback(value);
  })
};

const subscribe = (name: string, listener: (value: any) => void) => {
  listeners[name].push({
    key: name,
    callback: listener
  });
};

// The second argument is ignored after the singleton is set, to change the singleton use it's setter
export const useGlobalState = (name: string, initialValue?: any) => {
  const [singletonObject, setSingletonObject] = useState(
    globalObjects[name as any] ?? (globalObjects[name as any] = initialValue)
  );

  useEffect(() => {
    if (!listeners[name])
      listeners[name] = [] as Listener[];
    subscribe(name, setSingletonObject);
  }, []);

  return [singletonObject, (value: any) => set(name, value)];
};
