import { useCallback, useMemo, useState } from "react";
import { TextTheme } from "./TextTheme";

export const Person = ({ person }) => {
  const [repeticoes] = useState(1000000000);
  const funcaoLenta = useCallback(
    (a, b) => {
      let result = 0;
      for (let i = 0; i < repeticoes; ++i) {
        result = result + i;
      }
      return result + a + b;
    },
    [repeticoes]
  );
  const resultadoMemorizado = useMemo(() => funcaoLenta(2, 5), [funcaoLenta]);
  console.log("renderizando o Person inicio...");
  console.log("resultado = ", resultadoMemorizado);
  console.log("renderizando o Person fim...");
  return (
    <div>
      <h2>{person.name}</h2>
      <p>
        Data de Nascimento: {person.birth_year}
        <br />
        Sexo: {person.gender}
        <br />
        Cor dos olhos: {person.eye_color}
      </p>
      <TextTheme />
    </div>
  );
};
