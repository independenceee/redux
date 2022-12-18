import { useSelector, useDispatch } from "react-redux";

const App = function () {
  const counter = useSelector(function (state) {
    return state.counter;
  });

  const dispatch = useDispatch();

  const handleIncrement = function () {
    dispatch({ type: "INC" });
  };

  const handleDecrement = function () {
    dispatch({type: "DEC"})
  };

  const addValue = function() {
    dispatch({ type: "ADD", payload: 10})
  }
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}></button>
      <button onClick={handleDecrement}></button>
    </div>
  );
};
