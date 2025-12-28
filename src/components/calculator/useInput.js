import { useState, useCallback } from "react";
function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback((event) => {
    setValue(Number(event.target.value));
  }, []);
  return {
    value: value,
    onChange: handleChange,
  };
}
export default useInput;
