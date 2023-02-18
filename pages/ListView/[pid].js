import React from "react";
import classes from "../../styles/View.module.css";
import Link from "next/link";
import Image from "next/image";
import back from "../../Assets/back.png";
import { selectedTodo } from "../../Components/ReduxSection/TodoSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
export const ListView = () => {
  const val = useSelector(selectedTodo);
  const router = useRouter();
  const { pid } = router.query;
  const selectedTodoVal = val.find((todo) => todo.id.toString() === pid);
  return (
    <div className={classes.mainContainer}>
      <div className={classes.back}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Image src={back} width="24px" height="24px" />
        </Link>
        <Link href="/" style={{ textDecoration: "none" }}>
          <p className={classes.backText}>Back</p>
        </Link>
      </div>
      <div className={classes.container}>
        <div className={classes.viewListContainer}>
          {selectedTodo && (
            <p className={classes.viewText}>{selectedTodoVal?.title}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListView;
