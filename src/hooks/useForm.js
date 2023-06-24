import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormState(initialForm);
  };

  return {
    values: formState,
    handleChange,
    resetForm,
  };
};
