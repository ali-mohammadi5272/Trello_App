import { useState } from "react";
import styles from "./DragArea.module.scss";

const DragArea = ({ onDrop }) => {
  const [showDragArea, setShowDragArea] = useState(false);

  const dragOverHandler = (e) => {
    e.preventDefault();
    setShowDragArea(true);
  };

  const dropHandler = (e) => {
    onDrop && onDrop(e);
    setShowDragArea(false);
  };

  const dragLeaveHandler = () => setShowDragArea(false);

  return (
    <div
      className={styles.dragAreaContainer}
      onDragOver={dragOverHandler}
      onDrop={dropHandler}
      onDragLeave={dragLeaveHandler}
    >
      <div
        className={`${styles.dragArea} ${
          showDragArea ? styles.dragArea_show : ""
        }`}
      >
        DragArea
      </div>
    </div>
  );
};

export default DragArea;
