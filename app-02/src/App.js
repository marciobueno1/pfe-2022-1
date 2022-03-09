import "./App.css";
import { Contador } from "./Contador";

function App() {
  return (
    <div className="App">
      <Contador nome="A" valorInicial={10} />
      <hr />
      <Contador nome="B" valorInicial={-5} />
      <hr />
      <Contador nome="3" valorInicial={20} />
    </div>
  );
}

export default App;
