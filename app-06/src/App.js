import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { About } from "./pages/About";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { NoMatch } from "./pages/NoMatch";

function App() {
  return (
    <div className="App">
      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      );
    </div>
  );
}

export default App;
