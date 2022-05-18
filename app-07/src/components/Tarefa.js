export function Tarefa({ tarefa }) {
  return (
    <p style={{ textDecoration: tarefa.concluida ? "line-through" : "none" }}>
      {tarefa.descricao}
    </p>
  );
}
