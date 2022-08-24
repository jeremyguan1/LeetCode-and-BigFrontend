import { useRef } from "react";

export function useIsFirstRender() {
  // your code here
  const ref = useRef(0);

  if (ref.current === 0) {
    ref.current = 1;
    return true;
  }

  return false;
}
