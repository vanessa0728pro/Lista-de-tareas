import React, { useState } from "react";
import styles from "./Header.module.css";
import { BsPlusCircle } from "react-icons/bs";
import taskListIcon from "../assets/taskListIcon.jpg";
import { BsTrashFill } from "react-icons/bs";
import { VscChecklist } from "react-icons/vsc";

function Header({ onAddTask, onDeleteAllTasks, onCompleteAll }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [formValidation, setFormValidation] = useState({
    error: false,
    errorMessage: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const error = title.length < 3 || title.trim() === "";
    setFormValidation({
      error: error,
      errorMessage: error
        ? "❌ El nombre de la tarea debe tener al menos 3 caracteres❗"
        : "",
    });

    if (!error) {
      onAddTask(title, description);
      setTitle("");
      setDescription("");
    }
  };

  const handleCompleteAllTasks = () => {
    onCompleteAll();
  };

  const handleDeleteAllTasks = () => {
    onDeleteAllTasks();
  };

  const onChangeTitle = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const onChangeDescription = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.todoApp}>Mi Lista de Tareas</h1>
      <img src={taskListIcon} alt="Todo App" width={160} />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          className={`${styles.inputTitle} ${
            formValidation.error ? styles.inputError : ""
          }`}
          placeholder="Agregar Tarea"
          type="text"
          value={title}
          onChange={onChangeTitle}
        />
        <input
          className={styles.inputDescription}
          placeholder="Agregar Descripcion"
          type="text"
          value={description}
          onChange={onChangeDescription}
        />
        {formValidation.error && (
          <span className={styles.error}>{formValidation.errorMessage}</span>
        )}
        <button type="submit" className={styles.addButton}>
          Crear
          <BsPlusCircle size={20} />
        </button>
        <button
          className={styles.deleteAllTasks}
          type="button"
          onClick={handleDeleteAllTasks}
        >
          Eliminar Todo
          <BsTrashFill size={20} />
        </button>
        <button
          className={styles.completeAllTasks}
          type="button"
          onClick={handleCompleteAllTasks}
        >
          Completar Todo
          <VscChecklist size={20} />
        </button>
      </form>
    </header>
  );
}

export default Header;
