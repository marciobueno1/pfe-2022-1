import React, { useEffect, useState } from "react";
import "./App.css";

const Exemplo = ({ prop1 }) => {
  useEffect(() => {
    console.log("Executou o useEffect da prop1");
    return () => {
      console.log("Executou a limpeza do useEffect da prop1");
    };
  }, [prop1]);
  return <h2>{prop1}</h2>;
};

function App() {
  const [prop1, setProp1] = useState("Info01");
  const [inputProp1, setInputProp1] = useState("");
  return (
    <div className="App">
      <h1>Exemplo de useEffect</h1>
      <hr />
      <p>
        Digite a prop1:
        <input
          type="text"
          value={inputProp1}
          onChange={(evt) => setInputProp1(evt.target.value)}
        />
        <button onClick={() => setProp1(inputProp1)}>Alterar Prop1</button>
      </p>
      <hr />
      <Exemplo prop1={prop1} />
    </div>
  );
}

export default App;
