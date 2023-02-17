import React from "react";
import classes from "../../styles/ListSection.module.css";
import bin from "../../Assets/bin.png";
import Image from "next/image";

export const TodoList = () => {
  return (
    <div className={classes.listContainer}>
      {/* {[
        {
          id: 1,
          title: "Todo In Next js",
        },
        {
          id: 2,
          title: "State Manage",
        },
        // ].map((item) => {
        */}
      <div className={classes.listPoint}>
        <p>Hello</p>
        <Image width="32px" height="32px" src={bin} alt="bin" />
      </div>
      {/* // })} */}
    </div>
  );
};

export default TodoList;
