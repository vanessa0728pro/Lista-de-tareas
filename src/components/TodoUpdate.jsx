import React, { useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useForm } from "../Hooks/useForm";

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
  const { values, handleChange } = useForm({
    name: todo.name,
    description: todo.description,
  });

  const [disabled, setDisabled] = useState(true);
  const focusInputRef = useRef();

  const onSubmitUpdate = (e) => {
    e.preventDefault();

    const id = todo.id;
    const { name, description } = values;

    handleUpdateTodo(id, name, description);

    setDisabled(!disabled);

    focusInputRef.current.focus();
  };

  return (
    <form onSubmit={onSubmitUpdate}>
      <input
        type="text"
        className={`input-update ${todo.done ? "text-decoration-dashed" : ""}`}
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Nombre de la tarea"
        readOnly={disabled}
        ref={focusInputRef}
      />
      <input
        type="text"
        className={`input-update ${todo.done ? "text-decoration-dashed" : ""}`}
        name="description"
        value={values.description}
        onChange={handleChange}
        placeholder="Descripción de la tarea"
        readOnly={disabled}
      />

      <button className="btn-edit" type="submit">
        <FaEdit />
      </button>
    </form>
  );
};
