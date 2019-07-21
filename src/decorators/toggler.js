import React from "react";
import { useToggle } from "../hooks/toggle";

//decorator === HOC === Higher Order Component

export default OriginalComponent =>
  function DecoratedComponent(props) {
    const { isOpen, toggleState } = useToggle(props.defaultState);
    return (
      <OriginalComponent {...props} isOpen={isOpen} toggleState={toggleState} />
    );
  };
