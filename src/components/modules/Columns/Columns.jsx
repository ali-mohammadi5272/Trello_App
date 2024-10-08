import { useContext, useState } from "react";
import styles from "./Columns.module.scss";
import { DBContext } from "../../../context/DBProvider";
import Column from "../Column/Column";
import { AuthContext } from "../../../context/AuthProvider";
import ColumnCreator from "../../modules/ColumnAndTaskCreator/ColumnAndTaskCreator";
import {
  createColumn,
  getLocalStorageData,
  isFormEmpty,
  setLocalStorageData,
} from "../../../utils/helperFunctions";

const Columns = () => {
  const { setColumns, columns } = useContext(DBContext);
  const { user } = useContext(AuthContext);
  const [column, setColumn] = useState({ value: "" });

  const createNewColumnHandler = (e) => {
    e.preventDefault();
    if (isFormEmpty(column)) {
      return;
    }
    const db = getLocalStorageData("db");
    const newColumn = createColumn(user.id, column.value);
    db.columns.push(newColumn);
    setLocalStorageData("db", db);
    setColumns((prev) => [...prev, newColumn]);
    setColumn({ value: "" });
  };

  const creatorColumnChange = (e) => setColumn({ value: e.target.value });

  return (
    <div className={styles.columnsRow}>
      {user &&
        columns
          .filter((column) => column.userId === user.id)
          .map((column) => <Column key={column.id} {...column} />)}
      <ColumnCreator
        data={column}
        onChange={creatorColumnChange}
        onSubmit={createNewColumnHandler}
        placeholder="Creare a new Column"
      />
    </div>
  );
};

export default Columns;
