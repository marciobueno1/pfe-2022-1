import { useStore } from "../zustandStore";

export function Home() {
  const increasePopulation = useStore((state) => state.increasePopulation);
  const removeAllBears = useStore((state) => state.removeAllBears);
  const bears = useStore((state) => state.bears);
  const people = useStore((state) => state.people);
  const fetchPeople = useStore((state) => state.fetchPeople);
  return (
    <div>
      <h2>Home</h2>
      <button onClick={increasePopulation}>
        aumentar em 1 a população de ursos
      </button>
      <button onClick={removeAllBears}>zerar população de ursos</button>
      <hr />
      <button onClick={() => fetchPeople(bears)}>Fetch People</button>
      {people.map((person) => (
        <div key={person.name}>name: {person.name}</div>
      ))}
    </div>
  );
}
