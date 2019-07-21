import { useState, useCallback } from "react";

export function useToggle(defaultState) {
  const [isOpen, toggle] = useState(defaultState);

  const toggleState = () => toggle(!isOpen);

  return { isOpen, toggleState };
}
