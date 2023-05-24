import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Clear from "./components/Clear";
import Contador from "./components/Contador";

function App() {
  const list = [
    { list: "Cambio de panales" },
    { list: "Dar probioticos" },
    { list: "Dar comida" },
    { list: "Hacer ejercicios" },
    { list: "Dormir" },
    { list: "Banar" },
  ];
  return (
    <div className="App">
      <Header />
      {list.map((tareas) => (
        <TaskList list={tareas.list} />
      ))}
      <Clear />
      <Contador />
    </div>
  );
}

export default App;
