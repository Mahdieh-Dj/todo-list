import { useContext, useState } from "react";
import { tasksData } from "../../App";
import { actionTypeTask } from "../../reducers/taskReducer";
import { AddPanel } from "./components/AddPanel";
import Button from "./components/Button";
import ToggleButton from "./components/ToggleButton";
import "./index.css";
export function TaskManager() {
  const { tasks, dispatchTask } = useContext(tasksData);
  const [editeTask, setEditeTask] = useState("");
  const [updatedTask, setUpdatedTask] = useState("");
  function handleDeleteTask(index) {
    dispatchTask({ type: actionTypeTask.deleteTask, payload: { index } });
  }
  function handleEditeTask(id, newValue) {
    if (newValue.trim()) {
      dispatchTask({
        type: actionTypeTask.editeTask,
        payload: { id, newValue },
      });
      setEditeTask("");
      setUpdatedTask("");
    }
  }
  function updateTaskHandler(e) {
    setUpdatedTask(e.target.value);
  }
  function handleCancel() {
    setEditeTask("");
    setUpdatedTask("");
  }
  function handleSetEditTask(id, value) {
    setUpdatedTask(value);
    setEditeTask(id);
  }
  function handleDoneTask(id, done) {
    dispatchTask({
      type: actionTypeTask.doneTask,
      payload: { id, done: !done },
    });
  }
  return (
    <div className="table-task">
      <AddPanel />
      {tasks.tasksArray.map((task, index) => {
        return (
          <div key={`${task.id}_task`}>
            {editeTask === task.id ? (
              <div className="row-table-task">
                <input
                  value={updatedTask}
                  onChange={(e) => updateTaskHandler(e)}
                />
                <div>
                  <Button
                    title={"done"}
                    clickHandler={() => handleEditeTask(task.id, updatedTask)}
                  >
                    <i className="fa fa-check-square-o"></i>
                  </Button>
                  <Button title={"cancel"} clickHandler={handleCancel}>
                    <i className="fa fa-close"></i>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="row-table-task">
                <div>
                  {!task.done ? (
                    <p>{task.value}</p>
                  ) : (
                    <p>
                      <s>{task.value}</s>{" "}
                    </p>
                  )}
                </div>
                <div>
                  <ToggleButton
                    checked={task.done}
                    clickHandler={() => handleDoneTask(task.id, task.done)}
                  />

                  <Button
                    title={"edit"}
                    clickHandler={() => handleSetEditTask(task.id, task.value)}
                  >
                    <i className="fa fa-pencil-square-o"></i>
                  </Button>
                  <Button
                    title={"delete"}
                    clickHandler={() => handleDeleteTask(index)}
                  >
                    <i className="fa fa-trash-o"></i>
                  </Button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
