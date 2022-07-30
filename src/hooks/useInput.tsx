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

  let regex: RegExp;
  const defineRegexType = () => {
    if (inputType === "email") {
      regex = email_REGEX;
    }
    if (inputType == "passowrd") {
      regex = passowrd_REGEX;
    }
  };
  defineRegexType();

  const validator = (value: string) => {
    return regex.test(value);
  };

  const isValueValid = validator(value);
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
