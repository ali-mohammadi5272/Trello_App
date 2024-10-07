import { useContext, useState } from "react";
import TaskCreator from "../ColumnAndTaskCreator/ColumnAndTaskCreator";
import styles from "./Column.module.scss";
import { DBContext } from "../../../context/DBProvider";
import Task from "../Task/Task";
import {
  createTask,
  getLocalStorageData,
  isFormEmpty,
  setLocalStorageData,
} from "../../../utils/helperFunctions";

const Column = ({ id, title }) => {
  const { tasks, setTasks } = useContext(DBContext);
  const [task, setTask] = useState({ value: "" });

  const createNewTaskHandler = (e) => {
    e.preventDefault();
    if (isFormEmpty(task)) {
      return;
    }
    const db = getLocalStorageData("db");
    const newColumn = createTask(id, task.value);
    db.tasks.push(newColumn);
    setLocalStorageData("db", db);
    setTasks((prev) => [...prev, newColumn]);
    setTask({ value: "" });
  };

  const creatorTaskChange = (e) => setTask({ value: e.target.value });

  return (
    <article className={styles.column}>
      <section>
        <header className={styles.column__title}>
          <h3>{title}</h3>
        </header>
      </section>
      <section className={styles.column__tasks}>
        {tasks
          .filter((task) => task.columnId === id)
          .map((task) => (
            <Task key={task.id} {...task} />
          ))}
      </section>
      <section>
        <TaskCreator
          onChange={creatorTaskChange}
          onSubmit={createNewTaskHandler}
          data={task}
        />
      </section>
    </article>
  );
};

export default Column;
