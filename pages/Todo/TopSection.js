import React, { useState } from "react";
import classes from "../../styles/TopSection.module.css";
import TodoList from "./TodoList";
import bin from "../../Assets/bin.png";
import Image from "next/image";
export const TopSection = () => {
  const [val, setVal] = useState("");
  const [todo, setTodo] = useState(["Todo Using Next JS", "State Management"]);
  const removeHandler = (val) => {
    setTodo((prev) => prev.filter((t) => t !== val));
  };
  const AddHandler = () => {
    if (!val) {
      return;
    } else {
      setTodo([...todo, val]);
      setVal("");
    }
  };

  return (
    <div className={classes.container}>
      <p className={classes.headerText}>Todo-App ( Using Next JS)</p>
      <div className={classes.inputContainer}>
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className={classes.input}
          placeholder="Add Your Todo"
        />
        <button onClick={() => AddHandler()} className={classes.btn}>
          ADD
        </button>
      </div>
      {/* <TodoList /> */}
      {todo.map((todo, index) => (
        <div className={classes.listContainer} key={index}>
          <div className={classes.listPoint}>
            <p className={classes.todo}>{todo}</p>
            <Image
              onClick={() => removeHandler(todo)}
              width="32px"
              height="32px"
              src={bin}
              alt="bin"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default TopSection;
