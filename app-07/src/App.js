import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/tarefas">Tarefas</Link> | <Link to="/sobre">Sobre</Link>
      </nav>
      <Outlet />
      <hr />
    </div>
  );
}

export default App;
