import { useStore } from "../zustandStore";

export function About() {
  const bears = useStore((state) => state.bears);
  return (
    <div>
      <h2>About</h2>
      <h3>Qtd de Ursos: {bears}</h3>
    </div>
  );
}
