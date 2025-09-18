import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootType } from "../store";
export const Counter = () => {
  const { counter } = useSelector((state: RootType) => state);
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch({ type: "INCREASE" });
  };
  const handleDecrease = () => {
    dispatch({ type: "DECREASE" });
  };

  return (
    <div>
      <h2>Counter : {counter}</h2>
      <div style={{display:"flex", flexDirection:"row", gap:"5px", border:"none",boxShadow:"none"}}>
        <button onClick={handleIncrease} style={{width:"30px"}}>+</button>
        <button onClick={handleDecrease} style={{ marginLeft: "30px",width:"30px" }}>
          -
        </button>
      </div>
    </div>
  );
};
