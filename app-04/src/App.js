import { useQuery } from "react-query";
import axios from "axios";
import "./App.css";
import { Person } from "./components/Person";

function App() {
  const { isLoading, error, data, isFetching } = useQuery("people", () =>
    axios.get("https://swapi.dev/api/people/").then((res) => {
      console.log("data", res.data);
      return res.data;
    })
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="App">
      <h1>React Query</h1>
      <div>{isFetching ? "Updating..." : ""}</div>
      {data.results.map((person) => (
        <Person key={person.url} data={person} />
      ))}
    </div>
  );
}

export default App;
