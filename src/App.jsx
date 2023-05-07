import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Clear from "./components/Clear";
import Contador from "./components/Contador";

function App() {
  const list = [
    { list: "diapers change" },
    { list: "give probioticos" },
    { list: "give milk" },
    { list: "get some exercise" },
    { list: "sleep" },
    { list: "Bath" },
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
