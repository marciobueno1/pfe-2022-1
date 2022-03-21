import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  console.log(`antes do useEffect: ${count}`);

  useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    document.title = `Você clicou ${count} vezes`;
    console.log(`dentro do useEffect: ${count}`);
  }, [count]);

  const handleBtCliqueAquiClick = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  const handleBtLimparClick = () => {
    setCount(0);
  };

  console.log(`depois do useEffect: ${count}`);
  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={handleBtCliqueAquiClick}>Clique aqui</button>
      <button onClick={handleBtLimparClick}>Limpar</button>
    </div>
  );
}

export default App;
