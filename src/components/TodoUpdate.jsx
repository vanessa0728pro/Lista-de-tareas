import React, { useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useForm } from "../Hooks/useForm";

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
  const { values, handleChange } = useForm({
    updateName: todo.name,
    updateDescription: todo.description,
  });

  const { updateName, updateDescription } = values;

  const [disabled, setDisabled] = useState(true);
  const focusInputRef = useRef();

  const onSubmitUpdate = (e) => {
    e.preventDefault();

    const id = todo.id;
    const name = updateName;
    const description = updateDescription;

    handleUpdateTodo(id, name, description);

    setDisabled(!disabled);

    focusInputRef.current.focus();
  };

  return (
    <form onSubmit={onSubmitUpdate}>
      <input
        type="text"
        className={`input-update ${todo.done ? "text-decoration-dashed" : ""}`}
        name="updateName"
        value={updateName}
        onChange={handleChange}
        placeholder="Nombre de la tarea"
        readOnly={disabled}
        ref={focusInputRef}
      />

      <input
        type="text"
        className={`input-update ${todo.done ? "text-decoration-dashed" : ""}`}
        name="updateDescription"
        value={updateDescription}
        onChange={handleChange}
        placeholder="Descripción de la tarea (opcional)"
        readOnly={disabled}
      />

      <button className="btn-edit" type="submit">
        <FaEdit />
      </button>
    </form>
  );
};
