import { createContext, useState } from "react";
import { getLocalStorageData } from "../utils/helperFunctions";

export const DBContext = createContext();

const DBProvider = ({ children }) => {
  const [columns, setColumns] = useState(
    () => getLocalStorageData("db").columns || []
  );
  const [tasks, setTasks] = useState(
    () => getLocalStorageData("db").tasks || []
  );

  return (
    <DBContext.Provider value={{ columns, setColumns, tasks, setTasks }}>
      {children}
    </DBContext.Provider>
  );
};

export default DBProvider;
