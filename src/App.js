import Home from "./pages/Home";
import Login from "./pages/Login";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const isLoggedIn = useSelector(function (state) {
    return state.auth.isLoggedIn;
  });

  return (
    <div className="App">
      {!isLoggedIn && <Login />}
      {isLoggedIn && <Home />}
    </div>
  );
}

export default App;
