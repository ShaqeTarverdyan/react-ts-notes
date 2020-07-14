import React, { useState, useCallback } from "react";

const FormField = ({ Component, ...restProps }) => {
  const [value, setValue] = useState("");
  const handleChange = useCallback(event => {
    setValue(event.target.value);
  }, []);

  return <Component value={value} onChange={handleChange} {...restProps} />;
};

export default FormField;
