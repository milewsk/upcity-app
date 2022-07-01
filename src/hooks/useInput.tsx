import React, { useState } from "react";

const useInput = (validationFunction: Function) => {
  const [value, setValue] = useState();
  const [isInputTouched, setIsInputTouched] = useState(false);

  const inputBlurrHandler = () => {
    setIsInputTouched(true);
  };

  const isValueValid = validationFunction(value);

  const hasError = isValueValid && isInputTouched;

  return {
    enteredValue: value,
    setEnteredValue: setValue,
    hasError: hasError,
    inputBlurrHandler: inputBlurrHandler,
    isValueValid: isValueValid,
  };
};

export default useInput;
