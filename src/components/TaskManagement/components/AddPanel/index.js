import { useContext } from "react";
import { tasksData } from "../../../../App";
import { actionTypeTask } from "../../../../reducers/taskReducer";
import "./index.css";
export function AddPanel() {
  const { tasks, dispatchTask } = useContext(tasksData);
  const newTask = tasks.newTask;
  function handleAddTask(newValue) {
    if (newTask.trim()) {
      dispatchTask({
        type: actionTypeTask.addTask,
        payload: { value: newValue },
      });
      dispatchTask({
        type: actionTypeTask.updateNewTask,
        payload: { newTask: "" },
      });
    }
  }
  return (
    <div className="add-input">
      <div className="input-add-container">
        <input
          className="input-add-task"
          type={"text"}
          value={newTask}
          placeholder={"Enter new task"}
          onChange={(e) =>
            dispatchTask({
              type: actionTypeTask.updateNewTask,
              payload: { newTask: e.target.value },
            })
          }
        />
        <button onClick={() => handleAddTask(newTask)}>Add</button>
      </div>
    </div>
  );
}
