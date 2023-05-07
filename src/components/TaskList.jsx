import "./card.css";

function TaskList(props) {
  return (
    <div>
      <div className="Lista">
        <input className="check" type="checkbox" checked:true />
        <h2>{props.list}</h2>
        <div className="Lista">
          <img src="imagenes/editar.jpg" />
          <img src="imagenes/basurero.jpg" />
        </div>
      </div>
    </div>
  );
}

export default TaskList;
