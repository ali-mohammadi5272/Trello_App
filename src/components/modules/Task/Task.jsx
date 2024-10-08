import styles from "./Task.module.scss";

const Task = ({ id, title, columnId }) => {
  const dragStartHandler = (e) => {
    const task = JSON.stringify({ id, title, columnId });
    e.dataTransfer.setData("string", task);
  };

  return (
    <div className={styles.taskContainer}>
      <div className={styles.task} draggable onDragStart={dragStartHandler}>
        <h3 className={styles.task__title}>{title}</h3>
      </div>
    </div>
  );
};

export default Task;
