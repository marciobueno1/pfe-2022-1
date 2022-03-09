import React from "react";
import "./App.css";

function ClockFuncional(props) {
  const [date, setDate] = React.useState(new Date());
  React.useEffect(() => {
    console.log("componentDidMount");
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      console.log("componentWillUnmount");
      clearInterval(timerID);
    };
  }, []);
  return (
    <div>
      <h1>Relógio: {props.nome}</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function App() {
  const [show, setShow] = React.useState(true);
  function handleClick() {
    setShow(!show);
  }
  return (
    <div>
      {show && <ClockFuncional nome="Primeiro Relógio" />}
      <button onClick={handleClick}>Exibe/Oculta</button>
      <ClockFuncional nome="Segundo Relógio" />
      <ClockFuncional nome="Terceiro Relógio" />
    </div>
  );
}

export default App;
