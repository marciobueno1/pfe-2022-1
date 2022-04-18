import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const TextTheme = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <h2
      style={{
        background: themeContext.theme.background,
        color: themeContext.theme.foreground,
      }}
    >
      Eu sou estilizado pelo tema do contexto!
    </h2>
  );
};
