import styles from "../pages/AboutUs.module.css";
import about from "../assets/about.png";
import { LuAlignHorizontalDistributeCenter } from "react-icons/lu";
import { FaReact } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";

function AboutUs() {
  return (
    <>
      <div className={styles.icon}>
        <img src={about} alt="AboutUs" width={160} />
      </div>
      <h1 className={styles.title}>Acerca de Nosotros</h1>
      <p className={styles.about}>
        Bienvenido a nuestra aplicación de tareas. Somos un equipo de desarrollo
        comprometido en brindarte una herramienta sencilla y eficiente para la
        organización y gestión de tus tareas diarias.
      </p>
      <br></br>
      <h2 className={styles.functions}> Funcionalidades</h2>
      <br></br>
      <div className={styles.list}>
        <ul className={styles.ul}>
          <li>
            <BsPencilSquare color="#046967" />
            <strong style={{ color: "rgb(96, 247, 217)" }}>Crear Tareas</strong>
            : Puedes agregar una nueva tarea agregando un título y una
            descripción
          </li>
          <li>
            <BsPencilSquare color="#046967" />
            <strong style={{ color: "rgb(96, 247, 217)" }}>
              Editar Tareas
            </strong>
            : Si deseas, puedes actualizar una tarea, siempre y cuando, no la
            hayas completado
          </li>
          <li>
            <BsPencilSquare color="#046967" />
            <strong style={{ color: "rgb(96, 247, 217)" }}>
              Completar Tareas
            </strong>
            : Al momento que hayas culminado o cumplido una tarea, podrás
            marcarla como completada con el botón de completar
          </li>
          <li>
            <BsPencilSquare color="#046967" />
            <strong style={{ color: "rgb(96, 247, 217)" }}>
              Completar Todas las Tareas
            </strong>
            : Puedes completar todas las tareas de manera rápida
          </li>
          <li>
            <BsPencilSquare color="#046967" />
            <strong style={{ color: "rgb(96, 247, 217)" }}>
              Borrar Tareas
            </strong>
            : Puedes eliminar una tarea, independientemente de si la hayas
            completado o no
          </li>
          <li>
            <BsPencilSquare color="#046967" />
            <strong style={{ color: "rgb(96, 247, 217)" }}>
              Borrar todas las tareas
            </strong>
            : Puedes elimiar todas las tareas que tengas en la lista de manera
            rápida
          </li>
          <li>
            <BsPencilSquare color="#046967" />
            <strong style={{ color: "rgb(96, 247, 217)" }}>
              Almacenamiento de Datos
            </strong>
            : La app usa el almacenamiento local del navegador para guardar las
            tareas. Mantendrás tus tareas cuando cierres la aplicación
          </li>
        </ul>
      </div>
      <br></br>
      <h2 className={styles.functions}>Tecnologías</h2>
      <br></br>
      <div className={styles.list}>
        <ul className={styles.ul}>
          <li>
            <LuAlignHorizontalDistributeCenter color="#046967" />
            <strong style={{ color: "rgb(96, 247, 217)" }}>React</strong>: La
            Aplicación se desarrolló por medio de la biblioteca de JavaScript,
            React y la herramienta Vite
          </li>
          <li>
            <LuAlignHorizontalDistributeCenter color="#046967" />
            <strong style={{ color: "rgb(96, 247, 217)" }}>React Router</strong>
            : Permite manipular la navegación y el enrutamiento en las distintas
            páginas de la aplicación.
          </li>
          <li>
            <LuAlignHorizontalDistributeCenter color="#046967" />
            <strong style={{ color: "rgb(96, 247, 217)" }}>HTML y CSS</strong>:
            Empleadas para estructurar el contenido y la apariencia de la
            aplicación
          </li>
          <li>
            <LuAlignHorizontalDistributeCenter color="#046967" />
            <strong style={{ color: "rgb(96, 247, 217)" }}>
              Almacenamiento Local o Local Storage
            </strong>
            : Los datos quedan almacenados en la memoria del navegador por medio
            de la API del Local Storage
          </li>
        </ul>
      </div>
    </>
  );
}

export default AboutUs;
