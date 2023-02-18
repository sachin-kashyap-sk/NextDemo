import React from "react";
import classes from "../../styles/ListSection.module.css";
import bin from "../../Assets/bin.png";
import Image from "next/image";
import { selectedTodo, removeTodo } from "../ReduxSection/TodoSlice";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

export const TodoList = () => {
  const Todo = useSelector(selectedTodo);
  const dispatch = useDispatch();
  return (
    <div className={classes.listContainer}>
      {Todo.map((item) => (
        <div className={classes.listPoint} key={item.id}>
          <p className={classes.todo}>{item.title.substring(0, 40)}</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              width="32px"
              height="32px"
              src={bin}
              alt="bin"
              onClick={() => {
                dispatch(removeTodo(item.id));
              }}
            />
            <Link href={`/ListView/${item.id}`}>
              <button className={classes.viewBtn}>View Post</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
