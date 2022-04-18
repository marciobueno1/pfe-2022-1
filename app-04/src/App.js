import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { ThemeContext, themes } from "./contexts/ThemeContext";
import { TextTheme } from "./components/TextTheme";
import { useCallback, useEffect, useReducer, useState } from "react";
import { ChangeThemeButton } from "./components/ChangeThemeButton";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  console.log("renderizando o App...");
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentTheme, setCurrentTheme] = useState(themes.dark);
  const handleChangeThemeClicked = useCallback(() => {
    setCurrentTheme(currentTheme === themes.dark ? themes.light : themes.dark);
    // setCurrentTheme(isSameTheme(currentTheme, themes.dark) ? themes.light : themes.dark);
  }, [currentTheme]);
  const [contextTheme, setContextTheme] = useState({
    theme: currentTheme,
    toggleTheme: handleChangeThemeClicked,
  });
  useEffect(() => {
    console.log("dentro do useEffect...");
    setContextTheme({
      theme: currentTheme,
      toggleTheme: handleChangeThemeClicked,
    });
  }, [currentTheme, handleChangeThemeClicked]);
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> <Link to="/about">About</Link>
      </nav>
      <h1>Welcome to React Router!</h1>
      <ThemeContext.Provider value={contextTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path=":aboutID" element={<About />} />
          </Route>
        </Routes>
        <ChangeThemeButton />
      </ThemeContext.Provider>
      <hr />
      Contador: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <hr />
      <ChangeThemeButton />
      <h2>O TextTheme abaixo está fora do ThemeContext.Provider</h2>
      <TextTheme />
    </div>
  );
}

export default App;
