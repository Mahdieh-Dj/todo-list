export const actionTypeTask = {
  deleteTask: "DELETE_TASK",
  editeTask: "EDITE_TASK",
  addTask: "ADD_TASK",
  updateNewTask: "UPDATE_NEW_TASK",
  doneTask: "DONE_TASK",
};

export function taskReducer(state, action) {
  const tasks = [...state.tasksArray];
  const { payload } = action;
  switch (action.type) {
    case actionTypeTask.addTask:
      const len = tasks.length;
      const lastId = len !== 0 ? tasks[len - 1].id + 1 : 1;
      const newTask = { value: payload.value, done: false, id: lastId };
      tasks.push(newTask);
      window.localStorage.setItem("tasks", JSON.stringify(tasks));
      return { ...state, tasksArray: tasks };

    case actionTypeTask.updateNewTask:
      return { ...state, newTask: payload.newTask };

    case actionTypeTask.deleteTask:
      tasks.splice(payload.index, 1);
      window.localStorage.setItem("tasks", JSON.stringify(tasks));
      return { ...state, tasksArray: tasks };

    case actionTypeTask.editeTask:
      tasks.find((item) => item.id === payload.id).value = payload.newValue;
      window.localStorage.setItem("tasks", JSON.stringify(tasks));
      return { ...state, tasksArray: tasks };
    case actionTypeTask.doneTask:
      tasks.find((item) => item.id === payload.id).done = payload.done;
      window.localStorage.setItem("tasks", JSON.stringify(tasks));
      return { ...state, tasksArray: tasks };
    default:
      return state;
  }
}
