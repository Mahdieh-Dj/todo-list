import { createContext } from "react";
import { useReducer } from "react";
import "./App.css";
import { TaskManager } from "./components/TaskManagement";
import { taskReducer } from "./reducers/taskReducer";
export const tasksData = createContext();
function App() {
  const initialTasks = JSON.parse(window.localStorage.getItem("tasks"));
  const [tasks, dispatchTask] = useReducer(taskReducer, {
    tasksArray: initialTasks ?? [],
    newTask: "",
  });
  return (
    <div className="App">
      <tasksData.Provider value={{ tasks, dispatchTask }}>
        <TaskManager />
      </tasksData.Provider>
    </div>
  );
}

export default App;
