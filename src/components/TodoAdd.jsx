import React, { useState } from "react";
import { useForm } from "../Hooks/useForm";

export const TodoAdd = ({ handleNewTodo }) => {
  const [error, setError] = useState("");

  const { values, handleChange, resetForm } = useForm({
    name: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (values.name.trim().length < 3) {
      setError("El nombre debe tener al menos 3 caracteres");
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      name: values.name.trim(),
      done: false,
    };

    handleNewTodo(newTodo);
    resetForm();
    setError("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        className="input-add"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="¿Qué hay que hacer?"
      />

      {error && <p className="error-message">{error}</p>}

      <button className="btn-add" type="submit">
        Agregar
      </button>
    </form>
  );
};
