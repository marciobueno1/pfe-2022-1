import { useTarefas } from "../api";
import { Tarefa } from "../components/Tarefa";
import { TarefaAdicionar } from "../components/TarefaAdicionar";

export function Tarefas() {
  const { status, data: tarefas, error, isFetching } = useTarefas();
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Tarefas</h2>
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <div>
            <TarefaAdicionar />
            {!!tarefas &&
              tarefas.map((value, index) => (
                <Tarefa key={`${index}`} tarefa={value} />
              ))}
          </div>
          <div>{isFetching ? "Atualização em segundo plano..." : " "}</div>
        </>
      )}
    </main>
  );
}
