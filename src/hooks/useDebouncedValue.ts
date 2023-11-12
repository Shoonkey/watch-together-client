import { useEffect, useState } from "react";

function useDebouncedValue<T>(value: T, timeInMS: number) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeoutID = setTimeout(() => setDebouncedValue(value), timeInMS);
    return () => clearTimeout(timeoutID);
  }, [value, timeInMS]);

  return debouncedValue;
}

export default useDebouncedValue;
