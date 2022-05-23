import { useState } from "react";
import { useAddTarefa } from "../api";

export function TarefaAdicionar() {
  const [descricao, setDescricao] = useState("");
  const mutation = useAddTarefa();
  const handleBtAdicionarClick = () => {
    if (descricao.trim()) {
      mutation.mutate({ descricao: descricao.trim(), concluida: false });
    } else {
      alert("Descrição não pode estar vazia...");
    }
  };
  const { isLoading, isError, isSuccess, error } = mutation;

  return (
    <div>
      <hr />
      {isLoading ? (
        "Adicionando tarefa..."
      ) : (
        <>
          {isError ? <div>Ocorreu um erro: {error.message}</div> : null}

          {isSuccess ? <div>Tarefa adicionada!</div> : null}

          <p>
            <input
              value={descricao}
              onChange={(evt) => setDescricao(evt.target.value)}
            />
            <button onClick={handleBtAdicionarClick}>Adicionar</button>
          </p>
        </>
      )}
      <hr />
    </div>
  );
}
