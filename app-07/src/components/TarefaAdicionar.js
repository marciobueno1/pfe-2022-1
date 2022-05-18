import { useState } from "react";

export function TarefaAdicionar() {
  const [descricao, setDescricao] = useState("");
  const handleBtAdicionarClick = () => {
    console.log("descricao", descricao);
  };
  return (
    <div>
      <hr />
      <p>
        <input
          value={descricao}
          onChange={(evt) => setDescricao(evt.target.value)}
        />
        <button onClick={handleBtAdicionarClick}>Adicionar</button>
      </p>
      <hr />
    </div>
  );
}
