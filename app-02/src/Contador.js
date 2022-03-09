import React from "react";

export const Contador = (props) => {
  const [valor, setValor] = React.useState(
    props.valorInicial ? props.valorInicial : 0
  );
  const handleBtMenosClick = () => {
    setValor(valor - 1);
  };
  const handleBtMaisClick = () => {
    setValor(valor + 1);
  };
  return (
    <>
      <h1>Contador {props.nome}</h1>
      <h2>{valor}</h2>
      <button onClick={handleBtMenosClick}>-</button>
      <button onClick={handleBtMaisClick}>+</button>
    </>
  );
};
