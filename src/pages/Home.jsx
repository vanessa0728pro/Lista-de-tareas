import styles from "../pages/Home.module.css";
import home from "../assets/home.png";

function Home() {
  return (
    <>
      <div className={styles.icon}>
        <img src={home} alt="Home" width={160} />
      </div>
      <h1 className={styles.title}>Bienvenidos a My Task List</h1>
      <p className={styles.message}>
        ¡Hola! Nuestra aplicación te permite agregar tareas con nombre y
        descripción, marcarlas como completadas, actualizar su contenido y
        eliminarlas cuando ya no sean necesarias. 😉 ¿Qué esperas para usarla?
      </p>
    </>
  );
}

export default Home;
