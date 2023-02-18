import React, { useState } from "react";
import classes from "../../styles/TopSection.module.css";
import TodoList from "./TodoList";
import { addTodo } from "../ReduxSection/TodoSlice";
import { useDispatch } from "react-redux";

export const TopSection = () => {
  const dispatch = useDispatch();
  const [val, setVal] = useState("");
  const AddHandler = () => {
    if (!val) {
      return;
    } else {
      dispatch(addTodo(val));
      setVal("");
    }
  };

 return (
    <>
      <div className={classes.container}>
        <p className={classes.headerText}>Todo-App ( Using Next JS)</p>
        <div className={classes.inputContainer}>
          <input
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className={classes.input}
            placeholder="Add Your Todo"
          />
          <button onClick={AddHandler} className={classes.btn}>
            ADD
          </button>
        </div>
        <TodoList />
      </div>
    </>
  );
};
export default TopSection;
