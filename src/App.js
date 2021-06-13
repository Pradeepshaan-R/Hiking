import React from "react";
import { Route } from "react-router-dom";
import Index from "./Components/Index";
import GlobalStyle from "./globalStyles";
import "./App.css";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Route path="/" component={Index} />
    </div>
  );
}

export default App;
