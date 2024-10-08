import { useContext } from "react";
import FontAwesomeIcon from "../FontawesomeIcon/FontAwesomeIcon";
import styles from "./Task.module.scss";
import { DBContext } from "../../../context/DBProvider";
import swal from "sweetalert";
import { taskMessages } from "../../../utils/constants";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "../../../utils/helperFunctions";

const Task = ({ id, title, columnId }) => {
  const { tasks, setTasks } = useContext(DBContext);

  const dragStartHandler = (e) => {
    const task = JSON.stringify({ id, title, columnId });
    e.dataTransfer.setData("string", task);
  };

  const removeTaskHandler = () => {
    swal({
      icon: "warning",
      text: `Remove ${title} Task?`,
      buttons: ["No", "Yes"],
    }).then((result) => {
      if (result) {
        const db = getLocalStorageData("db");
        const newTasks = tasks.filter((task) => task.id !== id);
        db.tasks = newTasks;
        setLocalStorageData("db", db);
        setTasks(newTasks);
        swal({
          icon: "success",
          text: taskMessages.remove,
        });
      }
    });
  };

  return (
    <div className={styles.taskContainer}>
      <div className={styles.task} draggable onDragStart={dragStartHandler}>
        <h3 className={styles.task__title}>{title}</h3>
        <button
          type="button"
          className={styles.task__removeTaskBtn}
          onClick={removeTaskHandler}
        >
          <FontAwesomeIcon icon="faTrash" />
        </button>
      </div>
    </div>
  );
};

export default Task;
