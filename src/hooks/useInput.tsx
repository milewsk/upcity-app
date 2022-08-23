import React, { useCallback, useRef, useState } from "react";
import { email_REGEX, passowrd_REGEX } from "../shared/helper/Regex";

const useInput = (inputType: string) => {
  const valueRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>("");
  const [isInputTouched, setIsInputTouched] = useState(false);
  const [valueFocus, SetValueFocus] = useState(false);

  const inputBlurrHandler = () => {
    setIsInputTouched(true);
  };

  //let regex: RegExp = inputType === "email" ? email_REGEX : passowrd_REGEX;
  let regex: RegExp = /^[a-zA-Z][a-zA-Z0-9-_]/;
  if (inputType === "email") {
    regex = email_REGEX;
  } else if (inputType === "password") {
    regex = passowrd_REGEX;
  }

  const isValueValid: boolean = regex.test(value);
  const hasError = isValueValid && isInputTouched;

  return {
    valueRef: valueRef,
    enteredValue: value,
    setEnteredValue: setValue,
    hasError: hasError,
    inputBlurrHandler: inputBlurrHandler,
    isValueValid: isValueValid,
  };
};

export default useInput;
