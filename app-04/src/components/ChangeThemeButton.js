import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const ChangeThemeButton = () => {
  const themeContext = useContext(ThemeContext);
  return <button onClick={themeContext.toggleTheme}>Mudar tema</button>;
};
