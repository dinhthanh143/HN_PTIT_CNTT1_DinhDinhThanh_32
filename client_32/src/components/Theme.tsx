import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootType } from "../store";
export const Theme = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootType) => state);
  const style: React.CSSProperties =
    theme === "light"
      ? {
          color: "black",
          backgroundColor: "white",
          width: "15%",
          height: "100px",
        }
      : {
          color: "white",
          backgroundColor: "black",
          width: "15%",
          height: "100px",
        };
  return (
    <div style={style}>
      <input type="checkbox" name="" id="" onChange={()=>dispatch({type:"CHANGE_THEME"})}/>
      <label htmlFor="">{theme}</label>
    </div>
  );
};
