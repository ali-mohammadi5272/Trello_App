import styles from "./Task.module.scss";

const Task = ({ id, title, columnId }) => {
  return (
    <div className={styles.taskContainer}>
      <div className={styles.task} draggable>
        <h3 className={styles.task__title}>{title}</h3>
      </div>
    </div>
  );
};

export default Task;
