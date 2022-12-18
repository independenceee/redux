import React from "react";
import { useSlector, useDispatch } from "react-redux";
import { actions } from "./store";

const App = function () {
  const counter = useSlector(function (state) {
    return state.counter;
  });
  const dispatch = useDispatch();

  const handleIncrement = function () {
    dispatch(actions.incremnet());
  };

  const handleDecrement = function () {
    dispatch(actions.decrement());
  };

  const handleAddBy = function () {
    dispatch(actions.addBy(10));
  };
};
