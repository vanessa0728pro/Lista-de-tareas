import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [values, setValues] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setValues(initialForm);
  };

  return {
    values,
    handleChange,
    resetForm,
  };
};
