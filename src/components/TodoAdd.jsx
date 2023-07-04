import React from "react";
import { useForm } from "../Hooks/useForm";

export const TodoAdd = ({ handleNewTodo }) => {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    description: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (values.name.length < 3) {
      alert("El nombre de la tarea debe tener al menos 3 caracteres");
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      name: values.name,
      description: values.description,
      done: false,
    };

    handleNewTodo(newTodo);
    resetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        className="input-add"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Titulo de la tarea"
      />

      <input
        type="text"
        className="input-add"
        name="description"
        value={values.description}
        onChange={handleChange}
        placeholder="Descripción (opcional)"
      />

      <button className="btn-add" type="submit">
        Agregar
      </button>
    </form>
  );
};
