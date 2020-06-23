import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import TodoList from "./components/TodoList";
import Homepage from "./components/Homepage";
import NavigationHeader from "./components/Navigation/NavigationHeader";


function App() {
  return (
    <BrowserRouter>
      <NavigationHeader />
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route path="/todo" exact>
        <TodoList />
      </Route>
    </BrowserRouter>
  );
}

export default App;
