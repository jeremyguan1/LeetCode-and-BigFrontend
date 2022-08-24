import React, { useEffect, useCallback, useRef } from "react";

export default function useTimeout(callback, delay) {
  const ref = useRef();
  const fn = useRef(callback);

  useEffect(() => {
    fn.current = callback;
  }, [callback]);

  const data = useCallback(() => {
    ref.current = setTimeout(() => {
      fn.current();
    }, delay);
  }, [delay]);

  useEffect(() => {
    data();
    return () => clearTimeout(ref.current);
  }, [delay]);
}
