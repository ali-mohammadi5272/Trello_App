import React, { useContext, useState } from "react";
import TaskCreator from "../ColumnAndTaskCreator/ColumnAndTaskCreator";
import styles from "./Column.module.scss";
import Task from "../Task/Task";
import {
  createTask,
  getLocalStorageData,
  insertDataBetweenArrayIndexes,
  isFormEmpty,
  setLocalStorageData,
} from "../../../utils/helperFunctions";
import DragArea from "../DragArea/DragArea";
import { DBContext } from "../../../context/DBProvider";

const Column = ({ id, title }) => {
  const [task, setTask] = useState({ value: "" });
  const { tasks, setTasks } = useContext(DBContext);

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

  const onDropHandler = (e, tasksIndexes) => {
    const db = getLocalStorageData("db");
    const transferData = JSON.parse(e.dataTransfer.getData("string"));
    const draggedTask = { ...transferData, columnId: id };
    const columnTasks = tasks.filter((task) => task.columnId === id);
    const filteredTasks = tasks
      .filter((task) => task.columnId !== id)
      .filter((task) => task.id !== transferData.id);

    if (tasksIndexes.length === 1) {
      if (tasksIndexes[0] === 0) {
        const convertedTasks = [draggedTask, ...columnTasks].filter(
          (task, index) => !(task.id === transferData.id && index !== 0)
        );
        const newTasks = [...filteredTasks, ...convertedTasks];
        setTasks(newTasks);
        db.tasks = newTasks;
        setLocalStorageData("db", db);
      }
      //
      else if (tasksIndexes[0] === 1) {
        const convertedTasks = [...columnTasks, draggedTask].filter(
          (task, index) =>
            !(task.id === transferData.id && index !== columnTasks.length)
        );
        const newTasks = [...filteredTasks, ...convertedTasks];
        setTasks(newTasks);
        db.tasks = newTasks;
        setLocalStorageData("db", db);
      }
    }
    //
    else if (tasksIndexes.length === 2) {
      const info = {
        firstItemIndex: tasksIndexes[0],
        secondItemIndex: tasksIndexes[1],
        data: draggedTask,
        array: columnTasks,
      };
      const convertedTasks = insertDataBetweenArrayIndexes(info).filter(
        (task, index) =>
          !(task.id === draggedTask.id && index !== tasksIndexes[1])
      );
      const newTasks = [...filteredTasks, ...convertedTasks];
      setTasks(newTasks);
      db.tasks = newTasks;
      setLocalStorageData("db", db);
    }
  };

  return (
    <article className={styles.column}>
      <section>
        <header className={styles.column__title}>
          <h3>{title}</h3>
        </header>
      </section>
      <section className={styles.column__tasks}>
        <DragArea onDrop={(e) => onDropHandler(e, [0])} />
        {tasks
          .filter((task) => task.columnId === id)
          .map(
            (task, index) =>
              task.columnId === id && (
                <React.Fragment key={task.id}>
                  <Task {...task} />
                  {index <
                  tasks.filter((task) => task.columnId === id).length - 1 ? (
                    <DragArea
                      onDrop={(e) => onDropHandler(e, [index, index + 1])}
                    />
                  ) : null}
                </React.Fragment>
              )
          )}
        <DragArea onDrop={(e) => onDropHandler(e, [1])} />
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
